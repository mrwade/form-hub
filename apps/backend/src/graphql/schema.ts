import { gql } from 'apollo-server-core';

const schema = gql`
  scalar DateTime
  scalar JSON

  type Query {
    submissions: [Submission!]!
  }

  type Mutation {
    queueSubmissionGeneration(count: Int): Boolean!
  }

  type Submission {
    id: ID!
    submittedAt: DateTime!
    data: JSON!
  }
`;

export default schema;
