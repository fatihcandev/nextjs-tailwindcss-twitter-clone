import React from 'react'
import Link from 'next/link'

import Button, { IButtonProps } from '../Button/Button'

export interface ILinkButtonProps extends IButtonProps {
  href: string
}

const LinkButton = ({
  href,
  leftIcon,
  rightIcon,
  iconSize,
  className,
  children,
}: ILinkButtonProps) => {
  return (
    <Link href={href} passHref>
      <Button
        href={href}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        iconSize={iconSize}
        className={className}
      >
        {children && children}
      </Button>
    </Link>
  )
}

export default LinkButton
