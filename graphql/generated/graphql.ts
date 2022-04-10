import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "answers" */
export type Answers = {
  __typename?: 'answers';
  category_id: Scalars['String'];
  id: Scalars['Int'];
  is_correct: Scalars['Boolean'];
  /** An object relationship */
  title: Titles;
  title_id: Scalars['String'];
  user_id: Scalars['String'];
  year_id: Scalars['String'];
};

/** order by aggregate values of table "answers" */
export type Answers_Aggregate_Order_By = {
  avg?: InputMaybe<Answers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Answers_Max_Order_By>;
  min?: InputMaybe<Answers_Min_Order_By>;
  stddev?: InputMaybe<Answers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Answers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Answers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Answers_Sum_Order_By>;
  var_pop?: InputMaybe<Answers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Answers_Var_Samp_Order_By>;
  variance?: InputMaybe<Answers_Variance_Order_By>;
};

/** order by avg() on columns of table "answers" */
export type Answers_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "answers". All fields are combined with a logical 'AND'. */
export type Answers_Bool_Exp = {
  _and?: InputMaybe<Array<Answers_Bool_Exp>>;
  _not?: InputMaybe<Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Answers_Bool_Exp>>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_correct?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<Titles_Bool_Exp>;
  title_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  year_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "answers" */
export type Answers_Insert_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  is_correct?: InputMaybe<Scalars['Boolean']>;
  title_id?: InputMaybe<Scalars['String']>;
  year_id?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "answers" */
export type Answers_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "answers" */
export type Answers_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "answers" */
export type Answers_Mutation_Response = {
  __typename?: 'answers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Answers>;
};

/** Ordering options when selecting data from "answers". */
export type Answers_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_correct?: InputMaybe<Order_By>;
  title?: InputMaybe<Titles_Order_By>;
  title_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** select columns of table "answers" */
export enum Answers_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsCorrect = 'is_correct',
  /** column name */
  TitleId = 'title_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  YearId = 'year_id'
}

/** order by stddev() on columns of table "answers" */
export type Answers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "answers" */
export type Answers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "answers" */
export type Answers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "answers" */
export type Answers_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "answers" */
export type Answers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "answers" */
export type Answers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "answers" */
export type Answers_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Auth0_Profile = {
  __typename?: 'auth0_profile';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  content: Scalars['String'];
  id: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
};


/** columns and relationships of "categories" */
export type CategoriesSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
  subcategories?: InputMaybe<Subcategories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  subcategories_aggregate?: InputMaybe<Subcategories_Aggregate_Order_By>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Sort = 'sort'
}

/** columns and relationships of "choices" */
export type Choices = {
  __typename?: 'choices';
  content: Scalars['String'];
  id: Scalars['String'];
  is_answer: Scalars['Boolean'];
  /** An object relationship */
  question: Questions;
  question_id: Scalars['String'];
};

/** order by aggregate values of table "choices" */
export type Choices_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Choices_Max_Order_By>;
  min?: InputMaybe<Choices_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "choices". All fields are combined with a logical 'AND'. */
export type Choices_Bool_Exp = {
  _and?: InputMaybe<Array<Choices_Bool_Exp>>;
  _not?: InputMaybe<Choices_Bool_Exp>;
  _or?: InputMaybe<Array<Choices_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  is_answer?: InputMaybe<Boolean_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  question_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "choices" */
export type Choices_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "choices" */
export type Choices_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "choices". */
export type Choices_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_answer?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** select columns of table "choices" */
export enum Choices_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnswer = 'is_answer',
  /** column name */
  QuestionId = 'question_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "answers" */
  delete_answers?: Maybe<Answers_Mutation_Response>;
  /** delete single row from the table: "answers" */
  delete_answers_by_pk?: Maybe<Answers>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "answers" */
  insert_answers?: Maybe<Answers_Mutation_Response>;
  /** insert a single row into the table: "answers" */
  insert_answers_one?: Maybe<Answers>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_AnswersArgs = {
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AnswersArgs = {
  objects: Array<Answers_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Answers_OneArgs = {
  object: Answers_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: InputMaybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _set?: InputMaybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "online_users" */
export type Online_Users = {
  __typename?: 'online_users';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Online_Users_Bool_Exp>>;
  _not?: InputMaybe<Online_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Online_Users_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "online_users". */
export type Online_Users_Order_By = {
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  answers: Array<Answers>;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  auth0?: Maybe<Auth0_Profile>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  choices: Array<Choices>;
  /** fetch data from the table: "choices" using primary key columns */
  choices_by_pk?: Maybe<Choices>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** An array relationship */
  questions: Array<Questions>;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** An array relationship */
  titles: Array<Titles>;
  /** fetch data from the table: "titles" using primary key columns */
  titles_by_pk?: Maybe<Titles>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "years" */
  years: Array<Years>;
  /** fetch data from the table: "years" using primary key columns */
  years_by_pk?: Maybe<Years>;
};


export type Query_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootChoicesArgs = {
  distinct_on?: InputMaybe<Array<Choices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choices_Order_By>>;
  where?: InputMaybe<Choices_Bool_Exp>;
};


export type Query_RootChoices_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootOnline_UsersArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};


export type Query_RootSubcategories_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTitlesArgs = {
  distinct_on?: InputMaybe<Array<Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Titles_Order_By>>;
  where?: InputMaybe<Titles_Bool_Exp>;
};


export type Query_RootTitles_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootYearsArgs = {
  distinct_on?: InputMaybe<Array<Years_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Years_Order_By>>;
  where?: InputMaybe<Years_Bool_Exp>;
};


export type Query_RootYears_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  /** An array relationship */
  choices: Array<Choices>;
  content: Scalars['String'];
  id: Scalars['String'];
  /** An object relationship */
  title: Titles;
  title_id: Scalars['String'];
  /** An object relationship */
  year: Years;
  year_id: Scalars['String'];
};


/** columns and relationships of "questions" */
export type QuestionsChoicesArgs = {
  distinct_on?: InputMaybe<Array<Choices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choices_Order_By>>;
  where?: InputMaybe<Choices_Bool_Exp>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questions_Max_Order_By>;
  min?: InputMaybe<Questions_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  choices?: InputMaybe<Choices_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<Titles_Bool_Exp>;
  title_id?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Years_Bool_Exp>;
  year_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  choices_aggregate?: InputMaybe<Choices_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Titles_Order_By>;
  title_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Years_Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  TitleId = 'title_id',
  /** column name */
  YearId = 'year_id'
}

/** columns and relationships of "subcategories" */
export type Subcategories = {
  __typename?: 'subcategories';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  /** An array relationship */
  titles: Array<Titles>;
};


/** columns and relationships of "subcategories" */
export type SubcategoriesTitlesArgs = {
  distinct_on?: InputMaybe<Array<Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Titles_Order_By>>;
  where?: InputMaybe<Titles_Bool_Exp>;
};

/** order by aggregate values of table "subcategories" */
export type Subcategories_Aggregate_Order_By = {
  avg?: InputMaybe<Subcategories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subcategories_Max_Order_By>;
  min?: InputMaybe<Subcategories_Min_Order_By>;
  stddev?: InputMaybe<Subcategories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subcategories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subcategories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subcategories_Sum_Order_By>;
  var_pop?: InputMaybe<Subcategories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subcategories_Var_Samp_Order_By>;
  variance?: InputMaybe<Subcategories_Variance_Order_By>;
};

/** order by avg() on columns of table "subcategories" */
export type Subcategories_Avg_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subcategories". All fields are combined with a logical 'AND'. */
export type Subcategories_Bool_Exp = {
  _and?: InputMaybe<Array<Subcategories_Bool_Exp>>;
  _not?: InputMaybe<Subcategories_Bool_Exp>;
  _or?: InputMaybe<Array<Subcategories_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
  titles?: InputMaybe<Titles_Bool_Exp>;
};

/** order by max() on columns of table "subcategories" */
export type Subcategories_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "subcategories" */
export type Subcategories_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "subcategories". */
export type Subcategories_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  titles_aggregate?: InputMaybe<Titles_Aggregate_Order_By>;
};

/** select columns of table "subcategories" */
export enum Subcategories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Sort = 'sort'
}

/** order by stddev() on columns of table "subcategories" */
export type Subcategories_Stddev_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "subcategories" */
export type Subcategories_Stddev_Pop_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "subcategories" */
export type Subcategories_Stddev_Samp_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "subcategories" */
export type Subcategories_Sum_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "subcategories" */
export type Subcategories_Var_Pop_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "subcategories" */
export type Subcategories_Var_Samp_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "subcategories" */
export type Subcategories_Variance_Order_By = {
  sort?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  answers: Array<Answers>;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  choices: Array<Choices>;
  /** fetch data from the table: "choices" using primary key columns */
  choices_by_pk?: Maybe<Choices>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** An array relationship */
  questions: Array<Questions>;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** An array relationship */
  subcategories: Array<Subcategories>;
  /** fetch data from the table: "subcategories" using primary key columns */
  subcategories_by_pk?: Maybe<Subcategories>;
  /** An array relationship */
  titles: Array<Titles>;
  /** fetch data from the table: "titles" using primary key columns */
  titles_by_pk?: Maybe<Titles>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "years" */
  years: Array<Years>;
  /** fetch data from the table: "years" using primary key columns */
  years_by_pk?: Maybe<Years>;
};


export type Subscription_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootChoicesArgs = {
  distinct_on?: InputMaybe<Array<Choices_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Choices_Order_By>>;
  where?: InputMaybe<Choices_Bool_Exp>;
};


export type Subscription_RootChoices_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: InputMaybe<Array<Online_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Online_Users_Order_By>>;
  where?: InputMaybe<Online_Users_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootSubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subcategories_Order_By>>;
  where?: InputMaybe<Subcategories_Bool_Exp>;
};


export type Subscription_RootSubcategories_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTitlesArgs = {
  distinct_on?: InputMaybe<Array<Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Titles_Order_By>>;
  where?: InputMaybe<Titles_Bool_Exp>;
};


export type Subscription_RootTitles_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTodosArgs = {
  distinct_on?: InputMaybe<Array<Todos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todos_Order_By>>;
  where?: InputMaybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootYearsArgs = {
  distinct_on?: InputMaybe<Array<Years_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Years_Order_By>>;
  where?: InputMaybe<Years_Bool_Exp>;
};


export type Subscription_RootYears_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "titles" */
export type Titles = {
  __typename?: 'titles';
  /** An array relationship */
  answers: Array<Answers>;
  content: Scalars['String'];
  id: Scalars['String'];
  /** An array relationship */
  questions: Array<Questions>;
  sort?: Maybe<Scalars['Int']>;
  /** An object relationship */
  subcategory: Subcategories;
  subcategory_id: Scalars['String'];
  /** An object relationship */
  year: Years;
  year_id: Scalars['String'];
};


/** columns and relationships of "titles" */
export type TitlesAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "titles" */
export type TitlesQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** order by aggregate values of table "titles" */
export type Titles_Aggregate_Order_By = {
  avg?: InputMaybe<Titles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Titles_Max_Order_By>;
  min?: InputMaybe<Titles_Min_Order_By>;
  stddev?: InputMaybe<Titles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Titles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Titles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Titles_Sum_Order_By>;
  var_pop?: InputMaybe<Titles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Titles_Var_Samp_Order_By>;
  variance?: InputMaybe<Titles_Variance_Order_By>;
};

/** order by avg() on columns of table "titles" */
export type Titles_Avg_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "titles". All fields are combined with a logical 'AND'. */
export type Titles_Bool_Exp = {
  _and?: InputMaybe<Array<Titles_Bool_Exp>>;
  _not?: InputMaybe<Titles_Bool_Exp>;
  _or?: InputMaybe<Array<Titles_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
  subcategory?: InputMaybe<Subcategories_Bool_Exp>;
  subcategory_id?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Years_Bool_Exp>;
  year_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "titles" */
export type Titles_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "titles" */
export type Titles_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "titles". */
export type Titles_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  sort?: InputMaybe<Order_By>;
  subcategory?: InputMaybe<Subcategories_Order_By>;
  subcategory_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Years_Order_By>;
  year_id?: InputMaybe<Order_By>;
};

/** select columns of table "titles" */
export enum Titles_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Sort = 'sort',
  /** column name */
  SubcategoryId = 'subcategory_id',
  /** column name */
  YearId = 'year_id'
}

/** order by stddev() on columns of table "titles" */
export type Titles_Stddev_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "titles" */
export type Titles_Stddev_Pop_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "titles" */
export type Titles_Stddev_Samp_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "titles" */
export type Titles_Sum_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "titles" */
export type Titles_Var_Pop_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "titles" */
export type Titles_Var_Samp_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "titles" */
export type Titles_Variance_Order_By = {
  sort?: InputMaybe<Order_By>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_completed: Scalars['Boolean'];
  is_public: Scalars['Boolean'];
  title: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: InputMaybe<Array<Todos_Bool_Exp>>;
  _not?: InputMaybe<Todos_Bool_Exp>;
  _or?: InputMaybe<Array<Todos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  is_public?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on_conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: InputMaybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  IsPublic = 'is_public',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  is_completed?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  IsCompleted = 'is_completed'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  last_seen?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "years" */
export type Years = {
  __typename?: 'years';
  content: Scalars['String'];
  id: Scalars['String'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An array relationship */
  titles: Array<Titles>;
};


/** columns and relationships of "years" */
export type YearsQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "years" */
export type YearsTitlesArgs = {
  distinct_on?: InputMaybe<Array<Titles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Titles_Order_By>>;
  where?: InputMaybe<Titles_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "years". All fields are combined with a logical 'AND'. */
export type Years_Bool_Exp = {
  _and?: InputMaybe<Array<Years_Bool_Exp>>;
  _not?: InputMaybe<Years_Bool_Exp>;
  _or?: InputMaybe<Array<Years_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  titles?: InputMaybe<Titles_Bool_Exp>;
};

/** Ordering options when selecting data from "years". */
export type Years_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  titles_aggregate?: InputMaybe<Titles_Aggregate_Order_By>;
};

/** select columns of table "years" */
export enum Years_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id'
}

export type DeleteAnswersByYearMutationVariables = Exact<{
  yearId: Scalars['String'];
}>;


export type DeleteAnswersByYearMutation = { __typename?: 'mutation_root', delete_answers?: { __typename?: 'answers_mutation_response', returning: Array<{ __typename?: 'answers', id: number, title_id: string, year_id: string }> } | null };

export type GetQuestionQueryVariables = Exact<{
  questionId: Scalars['String'];
}>;


export type GetQuestionQuery = { __typename?: 'query_root', questions_by_pk?: { __typename?: 'questions', id: string, content: string, title: { __typename?: 'titles', content: string, subcategory: { __typename?: 'subcategories', content: string, category: { __typename?: 'categories', id: string, content: string } }, year: { __typename?: 'years', content: string } } } | null, choices: Array<{ __typename?: 'choices', id: string, content: string, is_answer: boolean }> };

export type GetQuestionAndTitlesByYearAndSubcategoryQueryVariables = Exact<{
  questionId: Scalars['String'];
  yearId: Scalars['String'];
  subcategoryId?: InputMaybe<Scalars['String']>;
}>;


export type GetQuestionAndTitlesByYearAndSubcategoryQuery = { __typename?: 'query_root', questions_by_pk?: { __typename?: 'questions', id: string, content: string, title: { __typename?: 'titles', content: string, subcategory: { __typename?: 'subcategories', content: string, category: { __typename?: 'categories', id: string, content: string } }, year: { __typename?: 'years', content: string } } } | null, choices: Array<{ __typename?: 'choices', id: string, content: string, is_answer: boolean }>, titles: Array<{ __typename?: 'titles', id: string, content: string }> };

export type GetTitlesByYearAndSubcategoryQueryVariables = Exact<{
  yearId?: InputMaybe<Scalars['String']>;
  subcategoryId?: InputMaybe<Scalars['String']>;
}>;


export type GetTitlesByYearAndSubcategoryQuery = { __typename?: 'query_root', titles: Array<{ __typename?: 'titles', id: string, content: string }> };

export type GetYearIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetYearIdQuery = { __typename?: 'query_root', years: Array<{ __typename?: 'years', id: string }> };

export type GetYearTitlesWithHeadingQueryVariables = Exact<{
  yearId: Scalars['String'];
}>;


export type GetYearTitlesWithHeadingQuery = { __typename?: 'query_root', titles: Array<{ __typename?: 'titles', id: string, content: string, subcategory_id: string }>, years_by_pk?: { __typename?: 'years', content: string } | null };

export type GetYearTitlesWithHeadingAndAnswersQueryVariables = Exact<{
  yearId: Scalars['String'];
}>;


export type GetYearTitlesWithHeadingAndAnswersQuery = { __typename?: 'query_root', titles: Array<{ __typename?: 'titles', id: string, content: string, subcategory_id: string, answers: Array<{ __typename?: 'answers', is_correct: boolean, category_id: string }> }>, years_by_pk?: { __typename?: 'years', content: string } | null };

export type GetYearsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetYearsQuery = { __typename?: 'query_root', years: Array<{ __typename?: 'years', content: string, id: string }> };

export type InsertAnswersOneMutationVariables = Exact<{
  categoryId: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  titleId: Scalars['String'];
  yearId: Scalars['String'];
}>;


export type InsertAnswersOneMutation = { __typename?: 'mutation_root', insert_answers_one?: { __typename?: 'answers', category_id: string, is_correct: boolean, title_id: string, year_id: string } | null };


export const DeleteAnswersByYearDocument = gql`
    mutation DeleteAnswersByYear($yearId: String!) {
  delete_answers(where: {year_id: {_eq: $yearId}}) {
    returning {
      id
      title_id
      year_id
    }
  }
}
    `;
export const GetQuestionDocument = gql`
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
  choices(where: {question_id: {_eq: $questionId}}) {
    id
    content
    is_answer
  }
}
    `;
export const GetQuestionAndTitlesByYearAndSubcategoryDocument = gql`
    query GetQuestionAndTitlesByYearAndSubcategory($questionId: String!, $yearId: String!, $subcategoryId: String) {
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
  choices(where: {question_id: {_eq: $questionId}}) {
    id
    content
    is_answer
  }
  titles(
    where: {_and: [{year_id: {_eq: $yearId}}, {subcategory_id: {_similar: $subcategoryId}}]}
    order_by: {id: asc}
  ) {
    id
    content
  }
}
    `;
export const GetTitlesByYearAndSubcategoryDocument = gql`
    query GetTitlesByYearAndSubcategory($yearId: String, $subcategoryId: String) {
  titles(
    where: {_and: [{year_id: {_eq: $yearId}}, {subcategory_id: {_similar: $subcategoryId}}]}
    order_by: {id: asc}
  ) {
    id
    content
  }
}
    `;
export const GetYearIdDocument = gql`
    query GetYearId {
  years {
    id
  }
}
    `;
export const GetYearTitlesWithHeadingDocument = gql`
    query GetYearTitlesWithHeading($yearId: String!) {
  titles(where: {year_id: {_eq: $yearId}}, order_by: {id: asc}) {
    id
    content
    subcategory_id
  }
  years_by_pk(id: $yearId) {
    content
  }
}
    `;
export const GetYearTitlesWithHeadingAndAnswersDocument = gql`
    query GetYearTitlesWithHeadingAndAnswers($yearId: String!) {
  titles(where: {year_id: {_eq: $yearId}}, order_by: {id: asc}) {
    id
    content
    subcategory_id
    answers {
      is_correct
      category_id
    }
  }
  years_by_pk(id: $yearId) {
    content
  }
}
    `;
export const GetYearsDocument = gql`
    query GetYears {
  years(order_by: {id: desc}) {
    content
    id
  }
}
    `;
export const InsertAnswersOneDocument = gql`
    mutation InsertAnswersOne($categoryId: String!, $isCorrect: Boolean!, $titleId: String!, $yearId: String!) {
  insert_answers_one(
    object: {category_id: $categoryId, is_correct: $isCorrect, title_id: $titleId, year_id: $yearId}
  ) {
    category_id
    is_correct
    title_id
    year_id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DeleteAnswersByYear(variables: DeleteAnswersByYearMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteAnswersByYearMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteAnswersByYearMutation>(DeleteAnswersByYearDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteAnswersByYear', 'mutation');
    },
    GetQuestion(variables: GetQuestionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuestionQuery>(GetQuestionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuestion', 'query');
    },
    GetQuestionAndTitlesByYearAndSubcategory(variables: GetQuestionAndTitlesByYearAndSubcategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionAndTitlesByYearAndSubcategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuestionAndTitlesByYearAndSubcategoryQuery>(GetQuestionAndTitlesByYearAndSubcategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuestionAndTitlesByYearAndSubcategory', 'query');
    },
    GetTitlesByYearAndSubcategory(variables?: GetTitlesByYearAndSubcategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTitlesByYearAndSubcategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTitlesByYearAndSubcategoryQuery>(GetTitlesByYearAndSubcategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTitlesByYearAndSubcategory', 'query');
    },
    GetYearId(variables?: GetYearIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetYearIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetYearIdQuery>(GetYearIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetYearId', 'query');
    },
    GetYearTitlesWithHeading(variables: GetYearTitlesWithHeadingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetYearTitlesWithHeadingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetYearTitlesWithHeadingQuery>(GetYearTitlesWithHeadingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetYearTitlesWithHeading', 'query');
    },
    GetYearTitlesWithHeadingAndAnswers(variables: GetYearTitlesWithHeadingAndAnswersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetYearTitlesWithHeadingAndAnswersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetYearTitlesWithHeadingAndAnswersQuery>(GetYearTitlesWithHeadingAndAnswersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetYearTitlesWithHeadingAndAnswers', 'query');
    },
    GetYears(variables?: GetYearsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetYearsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetYearsQuery>(GetYearsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetYears', 'query');
    },
    InsertAnswersOne(variables: InsertAnswersOneMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertAnswersOneMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAnswersOneMutation>(InsertAnswersOneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAnswersOne', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;