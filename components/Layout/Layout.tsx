import React from 'react'
import { Header } from '../Header'
import { Navbar } from '../Navbar'
import { NavbarMobile } from '../NavbarMobile'
import { Sidebar } from '../Sidebar'
import { TweetBox } from '../TweetBox'

import { IconName } from '../../types'

import styles from './Layout.module.css'

interface ILayoutProps {
  headerTitle: string
  headerIcon?: IconName
}

const Layout: React.FC<ILayoutProps> = ({ headerTitle, headerIcon, children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.inner}>
        <Header title={headerTitle} icon={headerIcon} />
        <TweetBox />
        <main>{children}</main>
        <NavbarMobile />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout
