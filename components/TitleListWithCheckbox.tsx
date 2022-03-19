import { VFC } from 'react'
import { Loading } from './Loading'
import Link from 'next/link'
// import { useLocalStorage } from 'hooks/useLocalStorage'
import { useQueryTitlesByYearAndSubcategory } from '../hooks/useQueryTitlesByYearAndSubcategory'

interface Props {
  yearId: string
  questionId: string
}

export const TitleListWithCheckbox: VFC<Props> = ({ yearId, questionId }) => {
  // checkbox
  // const checkboxes = [
  //   {
  //     label: '権利関係',
  //     category_id: 'k',
  //   },
  //   {
  //     label: '宅建業法',
  //     category_id: 't',
  //   },
  //   {
  //     label: '法令制限',
  //     category_id: 'h',
  //   },
  //   {
  //     label: '税その他',
  //     category_id: 'z',
  //   },
  // ]
  // const [checkedCategory, setCheckedCategory] = useLocalStorage(
  //   'checkedCategory',
  //   ['k', 't', 'h', 'z']
  // )
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const isChecked = e.target.checked
  //   if (isChecked) {
  //     setCheckedCategory([...checkedCategory, e.target.value])
  //   } else {
  //     setCheckedCategory(
  //       checkedCategory.filter((item) => item !== e.target.value)
  //     )
  //   }
  //   refetch()
  // }

  const { isLoading, data } = useQueryTitlesByYearAndSubcategory(yearId)

  if (isLoading) return <Loading />

  return (
    <>
      {/* checkboxes */}
      {/* <div className="form-control px-3">
        {checkboxes.map((category) => (
          <label key={category.label} className="label cursor-pointer">
            <span className="label-text">{category.label}</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              value={category.category_id}
              onChange={handleOnChange}
              checked={checkedCategory.includes(category.category_id)}
            />
          </label>
        ))}
      </div> */}

      {/* <hr className="my-4 border-t border-base-300" /> */}

      {/* title list */}
      {data?.map((title) => (
        <Link key={title.id} href={`/year/${yearId}/${title.id}`}>
          <a
            className={`block rounded-md py-3 px-4 ${
              questionId === title.id
                ? 'bg-primary text-white'
                : 'hover:bg-base-300'
            }`}
          >
            <p className="truncate">{title.content}</p>
          </a>
        </Link>
      ))}
    </>
  )
}
