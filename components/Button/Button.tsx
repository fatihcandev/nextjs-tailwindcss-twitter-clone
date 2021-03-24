import React from 'react'

import { Icon } from '../Icon'

import { IconName } from '../../types'

import styles from './Button.module.css'

export interface IButtonProps {
  onClick?: () => void
  href?: string
  leftIcon?: IconName
  rightIcon?: IconName
  iconSize?: string
  className?: string
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLAnchorElement, IButtonProps>(
  ({ onClick, href, leftIcon, rightIcon, iconSize, className = '', children }, ref) => {
    return (
      <a
        role="button"
        href={href}
        onClick={onClick}
        className={`${styles.container} ${className}`}
        ref={ref}
      >
        {leftIcon && <Icon name={leftIcon} size={iconSize} />}
        {children}
        {rightIcon && <Icon name={rightIcon} size={iconSize} />}
      </a>
    )
  }
)

export default Button
