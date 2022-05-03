import type { ReactNode } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import styles from './index.module.sass'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}