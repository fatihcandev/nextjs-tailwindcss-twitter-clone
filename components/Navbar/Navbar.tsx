import React from 'react'
import { useRouter } from 'next/router'

import { Button } from '../Button'
import { LinkButton } from '../LinkButton'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'

import { getNavbarItems } from '../../utils/getNavbarItems'

import styles from './Navbar.module.css'

const Navbar = () => {
  const { pathname } = useRouter()
  const hrefs = ['/', '/explore', '/notifications', '/messages', '/bookmarks', '/lists', '/profile']
  const items = getNavbarItems({ hrefs, pathname })
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <IconButton iconName="twitter" iconColor="text-blue" iconSize="30" />
        {items.map(({ href, leftIcon, iconSize, label, className }, index) => (
          <LinkButton
            key={index}
            href={href}
            leftIcon={leftIcon}
            iconSize={iconSize}
            className={className}
          >
            <Typography variant="lgBold" color="inherit" className={styles.text}>
              {label}
            </Typography>
          </LinkButton>
        ))}
        <Button leftIcon="more" onClick={() => true} iconSize="26.25">
          <Typography variant="lgBold" color="inherit" className={styles.text}>
            More
          </Typography>
        </Button>
        <Button type="primary" onClick={() => true} className={styles.tweetButton} full>
          <Typography variant="baseBold" color="text-white">
            Tweet
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default Navbar
