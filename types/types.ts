export interface QuestionData {
  questions_by_pk: QuestionsByPk
  choices?: ChoicesEntity[] | null
}
export interface QuestionsByPk {
  id: string
  content: string
  title: Title
}
export interface Title {
  id?: string
  content: string
  subcategory?: Subcategory
  year?: CategoryOrYear
  year_id?: string
}
export interface Subcategory {
  content: string
  category: CategoryOrYear
}
export interface CategoryOrYear {
  id?: string
  content: string
}
export interface ChoicesEntity {
  id: string
  content: string
  is_answer: boolean
}

export interface Answer {
  category_id: string
  is_correct: boolean
  title_id: string
}
