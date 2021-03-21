import React from 'react'

interface ITypographyProps {
  variant: 'sm' | 'smBold' | 'base' | 'baseBold' | 'lg' | 'lgBold'
  className?: string
}

const Typography: React.FC<ITypographyProps> = ({ variant, className = '', children }) => {
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
        return `${lgStyle} font-xbold`
    }
  }

  return <span className={`${getStyle()} ${className}`}>{children}</span>
}

export default Typography
