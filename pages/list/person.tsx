import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Person: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  console.log('router', router)
  return (
    <div>
      <h3>Person</h3>
      <p>name: {name}</p>
    </div>
  )
}

export default Person