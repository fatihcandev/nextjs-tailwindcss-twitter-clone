import React from 'react'
import { Avatar } from '../Avatar'

import styles from './Header.module.css'

interface IHeaderProps {
  className?: string
  onAvatarClick: () => void
}

const Header: React.FC<IHeaderProps> = ({ className = '', onAvatarClick }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Avatar src="/images/fatih.jpg" onClick={onAvatarClick} />
    </div>
  )
}

export default Header
