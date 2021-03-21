import React from 'react'

import styles from './Button.module.css'

interface IButtonProps {
  onClick?: () => void
  href?: string
  className?: string
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLAnchorElement, IButtonProps>(
  ({ onClick, href, className = '', children }, ref) => {
    return (
      <a href={href} onClick={onClick} className={`${styles.container} ${className}`} ref={ref}>
        {children}
      </a>
    )
  }
)

export default Button
