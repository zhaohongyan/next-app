import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from './index.module.sass'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const List: NextPage = (props) => {
  const { data, error } = useSWR('/api/list', fetcher)
  const router = useRouter()

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  const { list = [] } = data
  console.log('data', list)

  const goDetail = (id: number) => {
    router.push(`/list/detail/${id}`)
  }

  const goPerson = (name: string) => {
    router.push(`/list/person?name=${name}`)
  }


  return (
    <div className={styles.list}>
      <h3>List</h3>
      <p>点击id跳转 /list/detail/id</p>
      <p>点击name跳转 /list/person?name=name</p>
      <ul>
        {
          list.map((item: any) => {
            return (
              <li key={item.id} className={styles.item}>
                <span onClick={() => goDetail(item.id)}>id: {item.id}</span>
                <span onClick={() => goPerson(item.name)}>name: {item.name}</span>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default List