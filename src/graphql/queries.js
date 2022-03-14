/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      title
      content
      image
      date_created
    }
  }
`;
export const listEntries = /* GraphQL */ `
  query ListEntries(
    $filter: TableEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        image
        date_created
      }
      nextToken
    }
  }
`;
