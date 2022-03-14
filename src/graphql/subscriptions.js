/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry(
    $id: ID
    $title: String
    $content: String
    $image: AWSURL
    $date_created: AWSDateTime
  ) {
    onCreateEntry(
      id: $id
      title: $title
      content: $content
      image: $image
      date_created: $date_created
    ) {
      id
      title
      content
      image
      date_created
    }
  }
`;
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry(
    $id: ID
    $title: String
    $content: String
    $image: AWSURL
    $date_created: AWSDateTime
  ) {
    onUpdateEntry(
      id: $id
      title: $title
      content: $content
      image: $image
      date_created: $date_created
    ) {
      id
      title
      content
      image
      date_created
    }
  }
`;
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry(
    $id: ID
    $title: String
    $content: String
    $image: AWSURL
    $date_created: AWSDateTime
  ) {
    onDeleteEntry(
      id: $id
      title: $title
      content: $content
      image: $image
      date_created: $date_created
    ) {
      id
      title
      content
      image
      date_created
    }
  }
`;
