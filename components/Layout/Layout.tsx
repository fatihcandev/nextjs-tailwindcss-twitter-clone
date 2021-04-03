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
  showBackButton?: boolean
  headerPrimaryIcon?: IconName
  headerSecondaryIcon?: IconName
  searchValue?: string
  onSearchValueChange?: (value: string) => void
}

const Layout: React.FC<ILayoutProps> = ({
  headerTitle,
  headerSubtitle,
  showBackButton,
  headerPrimaryIcon,
  headerSecondaryIcon,
  searchValue,
  onSearchValueChange,
  children,
}) => {
  const { pathname, push } = useRouter()
  const isSearch = pathname === '/explore'
  const isMessages = pathname === '/messages'

  const goToComposeTweet = () => {
    push('/compose/tweet')
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.inner}>
        <Header
          title={headerTitle}
          subtitle={headerSubtitle}
          showBackButton={showBackButton}
          primaryIcon={headerPrimaryIcon}
          secondaryIcon={headerSecondaryIcon}
          isSearch={isSearch}
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
        />
        <TweetBox />
        <main>
          {children}
          <FAB type={isMessages ? 'message' : 'tweet'} onClick={goToComposeTweet} />
        </main>
        <NavbarMobile />
      </div>
      <Sidebar />
    </div>
  )
}

export default Layout
