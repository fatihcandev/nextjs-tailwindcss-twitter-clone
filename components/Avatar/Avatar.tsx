import React from 'react'
import Image from 'next/image'

interface IAvatarProps {
  size?: 'sm' | 'md'
  src: string
  isProfile?: boolean
  className?: string
  onClick?: () => void
}

const Avatar: React.FC<IAvatarProps> = ({ size, src, isProfile, className, onClick }) => {
  const getSize = () => {
    if (isProfile) {
      switch (size) {
        case 'sm':
          return 95.5
        case 'md':
          return 133.5
        default:
          return 67.5
      }
    } else {
      switch (size) {
        case 'sm':
          return 40
        case 'md':
          return 48
        default:
          return 32
      }
    }
  }

  return (
    <Image
      src="/images/fatih.jpg"
      width={getSize()}
      height={getSize()}
      className={className}
      onClick={onClick}
    />
  )
}

export default Avatar
