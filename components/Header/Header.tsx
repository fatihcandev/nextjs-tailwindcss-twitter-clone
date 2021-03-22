import React from 'react'
import { Avatar } from '../Avatar'
import { Typography } from '../Typography'
import { Icon } from '../Icon'
import { Search } from '../Search'

import { IconName } from '../../types'

import styles from './Header.module.css'

interface IHeaderProps {
  title?: string
  subtitle?: string
  icon?: IconName
  isSearch?: React.ReactNode
  className?: string
  onAvatarClick?: () => void
}

const Header = ({
  title,
  subtitle,
  icon,
  isSearch,
  className = '',
  onAvatarClick,
}: IHeaderProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.avatar}>
        <Avatar src="/images/fatih.jpg" onClick={onAvatarClick} />
      </div>
      {isSearch ? (
        <Search className={styles.search} />
      ) : (
        <div className={styles.title}>
          {title && (
            <Typography variant="lgBold" color="text-text-primary dark:text-dim-text-primary">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="sm" color="text-text-secondary dark:text-dim-text-secondary">
              {title}
            </Typography>
          )}
        </div>
      )}
      {icon && <Icon name={icon} color="text-blue" />}
    </div>
  )
}

export default Header
