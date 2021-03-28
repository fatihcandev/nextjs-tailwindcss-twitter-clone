import React from 'react'
import { Avatar } from '../Avatar'
import { Typography } from '../Typography'
import { Search } from '../Search'
import { IconButton } from '../IconButton'

import { IconName } from '../../types'

import styles from './Header.module.css'

interface IHeaderProps {
  title?: string
  subtitle?: string
  primaryIcon?: IconName
  secondaryIcon?: IconName
  isSearch?: React.ReactNode
  searchValue?: string
  onSearchValueChange?: (value: string) => void
  className?: string
  onAvatarClick?: () => void
}

const Header = ({
  title,
  subtitle,
  primaryIcon,
  secondaryIcon,
  isSearch,
  searchValue,
  onSearchValueChange,
  className = '',
  onAvatarClick,
}: IHeaderProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.avatar}>
        <Avatar src="/images/fatih.jpg" onClick={onAvatarClick} />
      </div>
      {isSearch ? (
        <Search className={styles.search} value={searchValue} onChange={onSearchValueChange} />
      ) : (
        <div className={styles.title}>
          {title && (
            <Typography variant="lgXBold" color="text-text-primary dark:text-dim-text-primary">
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
      {primaryIcon && <IconButton iconName={primaryIcon} iconColor="text-blue" />}
      {secondaryIcon && (
        <IconButton
          iconName={secondaryIcon}
          iconColor="text-blue"
          className={styles.secondaryIcon}
        />
      )}
    </div>
  )
}

export default Header
