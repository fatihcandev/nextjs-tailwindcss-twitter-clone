import React from 'react'
import { useRouter } from 'next/router'

import { Avatar } from '../Avatar'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { LinkButton } from '../LinkButton'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'

import { useWindowWidth } from '../../hooks'
import { getNavbarItems } from '../../utils'
import { deviceSizes } from '../../constants'

import styles from './Navbar.module.css'

const Navbar = () => {
  const { pathname } = useRouter()
  const { windowWidth } = useWindowWidth()
  const isLargeScreen = windowWidth < deviceSizes.md
  const hrefs = ['/', '/explore', '/notifications', '/messages', '/bookmarks', '/lists', '/profile']
  const items = getNavbarItems({ hrefs, pathname, isLargeScreen })
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <IconButton iconName="twitter" iconColor="text-blue" iconSize="30" />
        {items.map(({ href, leftIcon, iconSize, label, className }, index) => (
          <div key={index} className={styles.navbarItem}>
            <LinkButton href={href} leftIcon={leftIcon} iconSize={iconSize} className={className}>
              <Typography variant="lgBold" color="inherit" className={styles.text}>
                {label}
              </Typography>
            </LinkButton>
          </div>
        ))}
        <div className={styles.navbarItem}>
          <Button leftIcon="moreWithCircle" onClick={() => true} iconSize="26.25">
            <Typography variant="lgBold" color="inherit" className={styles.text}>
              More
            </Typography>
          </Button>
        </div>
        <Button type="primary" onClick={() => true} className={styles.tweetButton}>
          <Typography variant="baseBold" color="inherit" className={styles.tweetButtonText}>
            Tweet
          </Typography>
          <Icon name="composeTweet" className={styles.tweetButtonIcon} />
        </Button>
        <Button onClick={() => true} className={styles.userSection} full>
          <Avatar src="/images/fatih.jpg" size="sm" />
          <div className={styles.userSectionUserDetails}>
            <Typography variant="baseBold" color="text-text-primary">
              Fatih
            </Typography>
            <Typography variant="base" color="text-text-secondary">
              @fatihcandev
            </Typography>
          </div>
          <Icon name="more" className={styles.userSectionMoreIcon} />
        </Button>
      </div>
    </div>
  )
}

export default Navbar
