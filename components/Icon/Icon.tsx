import React from 'react'

import { IconName } from '../../types'
import * as Icons from '../icons'

interface IIconProps {
  name: IconName
  color: string
  className?: string
}

const Icon = ({ name, color, className = '' }: IIconProps) => {
  switch (name) {
    case 'arrowBottom':
      return <Icons.ArrowBottom className={`${color} ${className}`} />
    case 'bookmark':
      return <Icons.Bookmark className={`${color} ${className}`} />
    case 'bookmarkFill':
      return <Icons.BookmarkFill className={`${color} ${className}`} />
    case 'emoji':
      return <Icons.Emoji className={`${color} ${className}`} />
    case 'explore':
      return <Icons.Explore className={`${color} ${className}`} />
    case 'explorerFill':
      return <Icons.ExplorerFill className={`${color} ${className}`} />
    case 'gif':
      return <Icons.Gif className={`${color} ${className}`} />
    case 'home':
      return <Icons.Home className={`${color} ${className}`} />
    case 'homeFill':
      return <Icons.HomeFill className={`${color} ${className}`} />
    case 'like':
      return <Icons.Like className={`${color} ${className}`} />
    case 'lists':
      return <Icons.Lists className={`${color} ${className}`} />
    case 'listsFill':
      return <Icons.ListsFill className={`${color} ${className}`} />
    case 'media':
      return <Icons.Media className={`${color} ${className}`} />
    case 'messages':
      return <Icons.Messages className={`${color} ${className}`} />
    case 'messagesFill':
      return <Icons.MessagesFill className={`${color} ${className}`} />
    case 'more':
      return <Icons.More className={`${color} ${className}`} />
    case 'notification':
      return <Icons.Notification className={`${color} ${className}`} />
    case 'notificationFill':
      return <Icons.NotificationFill className={`${color} ${className}`} />
    case 'options':
      return <Icons.Options className={`${color} ${className}`} />
    case 'profile':
      return <Icons.Profile className={`${color} ${className}`} />
    case 'profileFill':
      return <Icons.ProfileFill className={`${color} ${className}`} />
    case 'question':
      return <Icons.Question className={`${color} ${className}`} />
    case 'reply':
      return <Icons.Reply className={`${color} ${className}`} />
    case 'retweet':
      return <Icons.Retweet className={`${color} ${className}`} />
    case 'search':
      return <Icons.Search className={`${color} ${className}`} />
    case 'share':
      return <Icons.Share className={`${color} ${className}`} />
    case 'spark':
      return <Icons.Spark className={`${color} ${className}`} />
    case 'twitter':
      return <Icons.Twitter className={`${color} ${className}`} />
    default:
      return null
  }
}

export default Icon
