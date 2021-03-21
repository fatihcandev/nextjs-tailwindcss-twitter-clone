import React from 'react'
import { Avatar } from '../Avatar'
import { Typography } from '../Typography'
import { Icon } from '../Icon'

import { IconName } from '../../types'

import styles from './Header.module.css'

interface IHeaderProps {
  title: string
  icon?: IconName
  className?: string
  onAvatarClick?: () => void
}

const Header = ({ title, icon, className = '', onAvatarClick }: IHeaderProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Avatar src="/images/fatih.jpg" onClick={onAvatarClick} className={styles.avatar} />
      <Typography variant="lgBold" className={styles.title}>
        {title}
      </Typography>
      {icon && <Icon name={icon} color="text-blue" className={styles.icon} />}
    </div>
  )
}

export default Header
