import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { startCase, uniq } from "lodash";
import React from "react";
import { SubmissionsQuery } from "../generated/graphql";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100vw;
`;

const Toolbar = styled.div`
  background: #eee;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

const Button = styled.button`
  background: black;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 12px 15px;
`;

const Dashboard: React.FC = () => {
  const { data, error, loading } = useQuery<SubmissionsQuery>(gql`
    query Submissions {
      submissions {
        id
        submittedAt
        data
      }
    }
  `);

  const [generateSubmissions] = useMutation(
    gql`
      mutation GenerateSubmissions($count: Int!) {
        queueSubmissionGeneration(count: $count)
      }
    `,
    { variables: { count: 10 } }
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { submissions } = data!;
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "submittedAt", headerName: "Submitted", width: 200 },
    ...uniq(submissions.flatMap((s) => Object.keys(s.data))).map((field) => ({
      field,
      headerName: startCase(field),
      width: 200,
      valueGetter: (params: GridValueGetterParams) => params.row.data[field],
    })),
  ];

  return (
    <Container>
      <Toolbar>
        <Button onClick={() => generateSubmissions()}>
          Generate Submissions
        </Button>
      </Toolbar>
      <DataGrid
        rows={submissions}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Container>
  );
};

export default Dashboard;
