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
  searchValue?: string
  onSearchValueChange?: (value: string) => void
}

const Layout: React.FC<ILayoutProps> = ({
  headerTitle,
  headerSubtitle,
  headerIcon,
  searchValue,
  onSearchValueChange,
  children,
}) => {
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
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
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
