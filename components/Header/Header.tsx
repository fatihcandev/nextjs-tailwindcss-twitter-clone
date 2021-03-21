import React from 'react'
import { Avatar } from '../Avatar'
import { Typography } from '../Typography'
import { Icon } from '../Icon'

import { IconName } from '../../types'

import styles from './Header.module.css'

interface IHeaderProps {
  title: string
  subtitle?: string
  icon?: IconName
  className?: string
  onAvatarClick?: () => void
}

const Header = ({ title, subtitle, icon, className = '', onAvatarClick }: IHeaderProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Avatar src="/images/fatih.jpg" onClick={onAvatarClick} className={styles.avatar} />
      <div className={styles.title}>
        <Typography variant="lgBold" color="text-text-primary dark:text-dim-text-primary">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="sm" color="text-text-secondary dark:text-dim-text-secondary">
            {title}
          </Typography>
        )}
      </div>
      {icon && <Icon name={icon} color="text-blue" className={styles.icon} />}
    </div>
  )
}

export default Header
