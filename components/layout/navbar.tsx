import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
  return (
    <nav>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/list">list</Link>
    </nav>
  )
}

export default Navbar