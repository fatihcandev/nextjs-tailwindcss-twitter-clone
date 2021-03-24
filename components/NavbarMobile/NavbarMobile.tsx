import React from 'react'
import { useRouter } from 'next/router'

import { IconButton } from '../IconButton'
import { IIconButtonProps } from '../IconButton/IconButton'

import { getNavbarMobileItems } from '../../utils/getNavbarMobileItems'

import styles from './NavbarMobile.module.css'

const NavbarMobile = () => {
  const { pathname } = useRouter()
  const commonProps: IIconButtonProps = {
    iconName: 'home',
    iconSize: '26.5',
    isLink: true,
  }
  const hrefs = ['/', '/explore', '/notifications', '/messages']
  const items = getNavbarMobileItems({ commonProps, hrefs, pathname })

  return (
    <div className={styles.container}>
      {items.map((props, index) => (
        <IconButton key={index} {...props} />
      ))}
    </div>
  )
}

export default NavbarMobile
