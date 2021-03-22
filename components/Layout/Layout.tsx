import React from 'react'
import { useRouter } from 'next/router'

import { Header } from '../Header'
import { Navbar } from '../Navbar'
import { NavbarMobile } from '../NavbarMobile'
import { Sidebar } from '../Sidebar'
import { TweetBox } from '../TweetBox'

import { IconName } from '../../types'

import styles from './Layout.module.css'

interface ILayoutProps {
  headerTitle?: string
  headerSubtitle?: string
  headerIcon?: IconName
}

const Layout: React.FC<ILayoutProps> = ({ headerTitle, headerSubtitle, headerIcon, children }) => {
  const { pathname } = useRouter()
  const isSearch = pathname === '/explore'
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.inner}>
        <Header
          title={headerTitle}
          subtitle={headerSubtitle}
          icon={headerIcon}
          isSearch={isSearch}
        />
        <TweetBox />
        <main>{children}</main>
        <NavbarMobile />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout
