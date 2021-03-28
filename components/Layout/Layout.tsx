import React from 'react'
import { useRouter } from 'next/router'

import { Header } from '../Header'
import { Navbar } from '../Navbar'
import { NavbarMobile } from '../NavbarMobile'
import { Sidebar } from '../Sidebar'
import { TweetBox } from '../TweetBox'
import { FAB } from '../FAB'

import { IconName } from '../../types'

import styles from './Layout.module.css'

interface ILayoutProps {
  headerTitle?: string
  headerSubtitle?: string
  headerPrimaryIcon?: IconName
  headerSecondaryIcon?: IconName
  searchValue?: string
  onSearchValueChange?: (value: string) => void
}

const Layout: React.FC<ILayoutProps> = ({
  headerTitle,
  headerSubtitle,
  headerPrimaryIcon,
  headerSecondaryIcon,
  searchValue,
  onSearchValueChange,
  children,
}) => {
  const { pathname } = useRouter()
  const isSearch = pathname === '/explore'
  const isMessages = pathname === '/messages'

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.inner}>
        <Header
          title={headerTitle}
          subtitle={headerSubtitle}
          primaryIcon={headerPrimaryIcon}
          secondaryIcon={headerSecondaryIcon}
          isSearch={isSearch}
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
        />
        <TweetBox />
        <main>
          {children}
          <FAB type={isMessages ? 'message' : 'tweet'} />
        </main>
        <NavbarMobile />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout
