import React from 'react'

import { Button } from '../Button'
import { LinkButton } from '../LinkButton'
import { Icon } from '../Icon'

import { IconName } from '../../types'

export interface IIconButtonProps {
  iconName: IconName
  iconColor?: string
  iconSize?: string
  onClick?: () => void
  isLink?: boolean
  href?: string
  className?: string
}

const IconButton = ({
  iconName,
  iconColor,
  iconSize,
  onClick,
  isLink,
  href,
  className,
}: IIconButtonProps) => {
  const icon = <Icon name={iconName} color={iconColor} size={iconSize} />
  return isLink && href ? (
    <LinkButton href={href} className={className}>
      {icon}
    </LinkButton>
  ) : (
    <Button onClick={onClick} className={className}>
      {icon}
    </Button>
  )
}

export default IconButton
