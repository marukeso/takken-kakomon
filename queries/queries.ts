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
            id
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

export const GET_TITLES_BY_YEAR_AND_YEAR_CONTENT = gql`
  query GetTitles($yearId: String!) {
    titles(where: { year_id: { _eq: $yearId } }, order_by: { id: asc }) {
      id
      content
    }
    years_by_pk(id: $yearId) {
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
export const INSERT_ANSWER = gql`
  mutation InsertAnswersOne(
    $categoryId: String!
    $isCorrect: Boolean!
    $titleId: String!
  ) {
    insert_answers_one(
      object: {
        category_id: $categoryId
        is_correct: $isCorrect
        title_id: $titleId
      }
    ) {
      category_id
      is_correct
      title_id
    }
  }
`
