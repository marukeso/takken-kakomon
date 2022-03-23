import { gql } from 'graphql-request'

export const GET_QUESTION = gql`
  query GetQuestion($questionId: String!) {
    questions_by_pk(id: $questionId) {
      id
      content
      title {
        content
        subcategory {
          content
          category {
            content
          }
        }
        year {
          content
        }
      }
    }
    choices(where: { question_id: { _eq: $questionId } }) {
      id
      content
      is_answer
    }
  }
`

export const GET_TITLES_BY_YEAR_AND_SUBCATEGORY = gql`
  query GetTitles($yearId: String, $subcategoryId: String) {
    titles(
      where: {
        _and: [
          { year_id: { _eq: $yearId } }
          { subcategory_id: { _similar: $subcategoryId } }
        ]
      }
      order_by: { id: asc }
    ) {
      id
      content
    }
  }
`

export const GET_TITLES = gql`
  query GetTitles {
    titles(order_by: { id: asc }) {
      id
      content
      year_id
    }
  }
`
