import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Detail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  console.log('router', router)
  return (
    <div>
      <h3>Detail</h3>
      <p>id: {id}</p>
    </div>
  )
}

export default Detail