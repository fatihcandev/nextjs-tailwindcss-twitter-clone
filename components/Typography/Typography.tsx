import React from 'react'

import { TypographyVariant } from '../../types'

interface ITypographyProps {
  variant: TypographyVariant
  color: string
  className?: string
}

const Typography: React.FC<ITypographyProps> = ({ variant, color, className = '', children }) => {
  const smStyle = 'text-sm leading-sm font-regular'
  const baseStyle = 'text-base leading-base font-regular'
  const lgStyle = 'text-lg leading-lg font-regular'

  const getStyle = () => {
    switch (variant) {
      case 'sm':
        return smStyle
      case 'smBold':
        return `${smStyle} font-bold`
      case 'base':
        return baseStyle
      case 'baseBold':
        return `${baseStyle} font-bold`
      case 'lg':
        return lgStyle
      case 'lgBold':
        return `${lgStyle} font-bold`
      case 'lgXBold':
        return `${lgStyle} font-xbold`
    }
  }

  return <span className={`${getStyle()} ${color} ${className}`}>{children}</span>
}

export default Typography
