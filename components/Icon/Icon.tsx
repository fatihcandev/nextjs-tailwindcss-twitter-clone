import React from 'react'

import { IconName } from '../../types'
import * as Icons from '../icons'

interface IIconProps {
  name: IconName
  color: string
  className?: string
  size?: string
}

const Icon = ({ name, color, size = '22.5', className = '' }: IIconProps) => {
  switch (name) {
    case 'arrowBottom':
      return <Icons.ArrowBottom className={`${color} ${className}`} width={size} height={size} />
    case 'bookmark':
      return <Icons.Bookmark className={`${color} ${className}`} width={size} height={size} />
    case 'bookmarkFill':
      return <Icons.BookmarkFill className={`${color} ${className}`} width={size} height={size} />
    case 'emoji':
      return <Icons.Emoji className={`${color} ${className}`} width={size} height={size} />
    case 'explore':
      return <Icons.Explore className={`${color} ${className}`} width={size} height={size} />
    case 'explorerFill':
      return <Icons.ExplorerFill className={`${color} ${className}`} width={size} height={size} />
    case 'gif':
      return <Icons.Gif className={`${color} ${className}`} width={size} height={size} />
    case 'home':
      return <Icons.Home className={`${color} ${className}`} width={size} height={size} />
    case 'homeFill':
      return <Icons.HomeFill className={`${color} ${className}`} width={size} height={size} />
    case 'like':
      return <Icons.Like className={`${color} ${className}`} width={size} height={size} />
    case 'lists':
      return <Icons.Lists className={`${color} ${className}`} width={size} height={size} />
    case 'listsFill':
      return <Icons.ListsFill className={`${color} ${className}`} width={size} height={size} />
    case 'media':
      return <Icons.Media className={`${color} ${className}`} width={size} height={size} />
    case 'messages':
      return <Icons.Messages className={`${color} ${className}`} width={size} height={size} />
    case 'messagesFill':
      return <Icons.MessagesFill className={`${color} ${className}`} width={size} height={size} />
    case 'more':
      return <Icons.More className={`${color} ${className}`} width={size} height={size} />
    case 'notification':
      return <Icons.Notification className={`${color} ${className}`} width={size} height={size} />
    case 'notificationFill':
      return (
        <Icons.NotificationFill className={`${color} ${className}`} width={size} height={size} />
      )
    case 'options':
      return <Icons.Options className={`${color} ${className}`} width={size} height={size} />
    case 'profile':
      return <Icons.Profile className={`${color} ${className}`} width={size} height={size} />
    case 'profileFill':
      return <Icons.ProfileFill className={`${color} ${className}`} width={size} height={size} />
    case 'question':
      return <Icons.Question className={`${color} ${className}`} width={size} height={size} />
    case 'reply':
      return <Icons.Reply className={`${color} ${className}`} width={size} height={size} />
    case 'retweet':
      return <Icons.Retweet className={`${color} ${className}`} width={size} height={size} />
    case 'search':
      return <Icons.Search className={`${color} ${className}`} width={size} height={size} />
    case 'share':
      return <Icons.Share className={`${color} ${className}`} width={size} height={size} />
    case 'spark':
      return <Icons.Spark className={`${color} ${className}`} width={size} height={size} />
    case 'twitter':
      return <Icons.Twitter className={`${color} ${className}`} width={size} height={size} />
    default:
      return null
  }
}

export default Icon
