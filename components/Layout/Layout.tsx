import React from 'react'
import { Header } from '../Header'
import { Navbar } from '../Navbar'
import { NavbarMobile } from '../NavbarMobile'
import { Sidebar } from '../Sidebar'

import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.inner}>
        <Header />
        <main>{children}</main>
        <NavbarMobile />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout