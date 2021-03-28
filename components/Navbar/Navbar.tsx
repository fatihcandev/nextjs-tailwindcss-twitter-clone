import React from 'react'
import { useRouter } from 'next/router'

import { Avatar } from '../Avatar'
import { Icon } from '../Icon'
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
        <Button leftIcon="moreWithCircle" onClick={() => true} iconSize="26.25">
          <Typography variant="lgBold" color="inherit" className={styles.text}>
            More
          </Typography>
        </Button>
        <Button type="primary" onClick={() => true} className={styles.tweetButton}>
          <Typography variant="baseBold" color="inherit" className={styles.tweetButtonText}>
            Tweet
          </Typography>
          <Icon name="composeTweet" className={styles.tweetButtonIcon} />
        </Button>
        <Button onClick={() => true} className={styles.userSection}>
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
