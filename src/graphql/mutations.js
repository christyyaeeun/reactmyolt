/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEntry = /* GraphQL */ `
  mutation CreateEntry($input: CreateEntryInput!) {
    createEntry(input: $input) {
      id
      title
      content
      image
      date_created
    }
  }
`;
export const updateEntry = /* GraphQL */ `
  mutation UpdateEntry($input: UpdateEntryInput!) {
    updateEntry(input: $input) {
      id
      title
      content
      image
      date_created
    }
  }
`;
export const deleteEntry = /* GraphQL */ `
  mutation DeleteEntry($input: DeleteEntryInput!) {
    deleteEntry(input: $input) {
      id
      title
      content
      image
      date_created
    }
  }
`;


/*
mutation CreateEntry {
  createUserEntry(input: {title: "", content: ""}) {
    userprofileID
    date_created
    content
    id
    image
    isPrivate
    title
  }
}
 */
