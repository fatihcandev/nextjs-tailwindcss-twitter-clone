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
      <Avatar
        src="https://pbs.twimg.com/profile_images/1373195730123374593/2098fuZm_400x400.jpg"
        onClick={onAvatarClick}
      />
    </div>
  )
}

export default Header
