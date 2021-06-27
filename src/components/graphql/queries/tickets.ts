import { gql } from '@apollo/client'

export const QUERY_ALL_TICKETS = gql`
  query {
    getTickets {
      id
      content
      tagId
      subject
      responsibleId

      client {
        id
        name
        createdAt
        updatedAt
      }
      responsible {
        id
        name
      }
      tags {
        id
        name
      }

      responsibleId
      status
    }
  }
`
