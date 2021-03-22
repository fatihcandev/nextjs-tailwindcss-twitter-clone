import React from 'react'
import { useRouter } from 'next/router'

import { IconButton } from '../IconButton'
import { IIconButtonProps } from '../IconButton/IconButton'

import styles from './NavbarMobile.module.css'

const NavbarMobile = () => {
  const { pathname } = useRouter()
  const navbarMobileItemsCommonProps: IIconButtonProps = {
    iconName: 'home',
    iconSize: '26.5',
    isLink: true,
  }

  const showFilledIcon = (href: string) => href === pathname

  const getColorClass = (href: string) =>
    showFilledIcon(href) ? 'text-blue' : 'text-text-secondary'

  const navbarMobileItems: IIconButtonProps[] = [
    {
      ...navbarMobileItemsCommonProps,
      href: '/',
      className: getColorClass('/'),
      iconName: showFilledIcon('/') ? 'homeFill' : 'home',
    },
    {
      ...navbarMobileItemsCommonProps,
      href: '/explore',
      className: getColorClass('/explore'),
      iconName: showFilledIcon('/explore') ? 'searchFocused' : 'search',
    },
    {
      ...navbarMobileItemsCommonProps,
      href: '/notifications',
      className: getColorClass('/notifications'),
      iconName: pathname === '/notifications' ? 'notificationFill' : 'notification',
    },
    {
      ...navbarMobileItemsCommonProps,
      href: '/messages',
      className: getColorClass('/messages'),
      iconName: pathname === '/messages' ? 'messagesFill' : 'messages',
    },
  ]
  return (
    <div className={styles.container}>
      {navbarMobileItems.map((props, index) => (
        <IconButton key={index} {...props} />
      ))}
    </div>
  )
}

export default NavbarMobile
