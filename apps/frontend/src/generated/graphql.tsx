import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  submissions: Array<Submission>;
};

export type Submission = {
  __typename?: 'Submission';
  data: Scalars['JSON'];
  id: Scalars['ID'];
  submittedAt: Scalars['DateTime'];
};

export type SubmissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SubmissionsQuery = { __typename?: 'Query', submissions: Array<{ __typename?: 'Submission', id: string, submittedAt: any, data: any }> };


export const SubmissionsDocument = gql`
    query Submissions {
  submissions {
    id
    submittedAt
    data
  }
}
    `;

/**
 * __useSubmissionsQuery__
 *
 * To run a query within a React component, call `useSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubmissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubmissionsQuery(baseOptions?: Apollo.QueryHookOptions<SubmissionsQuery, SubmissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubmissionsQuery, SubmissionsQueryVariables>(SubmissionsDocument, options);
      }
export function useSubmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubmissionsQuery, SubmissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubmissionsQuery, SubmissionsQueryVariables>(SubmissionsDocument, options);
        }
export type SubmissionsQueryHookResult = ReturnType<typeof useSubmissionsQuery>;
export type SubmissionsLazyQueryHookResult = ReturnType<typeof useSubmissionsLazyQuery>;
export type SubmissionsQueryResult = Apollo.QueryResult<SubmissionsQuery, SubmissionsQueryVariables>;