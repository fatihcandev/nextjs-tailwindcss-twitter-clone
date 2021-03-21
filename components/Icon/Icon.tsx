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
      return <Icons.ArrowBottom className={`text-${color} ${className}`} />
    case 'bookmark':
      return <Icons.Bookmark className={`text-${color} ${className}`} />
    case 'bookmarkFill':
      return <Icons.BookmarkFill className={`text-${color} ${className}`} />
    case 'emoji':
      return <Icons.Emoji className={`text-${color} ${className}`} />
    case 'explore':
      return <Icons.Explore className={`text-${color} ${className}`} />
    case 'explorerFill':
      return <Icons.ExplorerFill className={`text-${color} ${className}`} />
    case 'gif':
      return <Icons.Gif className={`text-${color} ${className}`} />
    case 'home':
      return <Icons.Home className={`text-${color} ${className}`} />
    case 'homeFill':
      return <Icons.HomeFill className={`text-${color} ${className}`} />
    case 'like':
      return <Icons.Like className={`text-${color} ${className}`} />
    case 'lists':
      return <Icons.Lists className={`text-${color} ${className}`} />
    case 'listsFill':
      return <Icons.ListsFill className={`text-${color} ${className}`} />
    case 'media':
      return <Icons.Media className={`text-${color} ${className}`} />
    case 'messages':
      return <Icons.Messages className={`text-${color} ${className}`} />
    case 'messagesFill':
      return <Icons.MessagesFill className={`text-${color} ${className}`} />
    case 'more':
      return <Icons.More className={`text-${color} ${className}`} />
    case 'notification':
      return <Icons.Notification className={`text-${color} ${className}`} />
    case 'notificationFill':
      return <Icons.NotificationFill className={`text-${color} ${className}`} />
    case 'options':
      return <Icons.Options className={`text-${color} ${className}`} />
    case 'profile':
      return <Icons.Profile className={`text-${color} ${className}`} />
    case 'profileFill':
      return <Icons.ProfileFill className={`text-${color} ${className}`} />
    case 'question':
      return <Icons.Question className={`text-${color} ${className}`} />
    case 'reply':
      return <Icons.Reply className={`text-${color} ${className}`} />
    case 'retweet':
      return <Icons.Retweet className={`text-${color} ${className}`} />
    case 'search':
      return <Icons.Search className={`text-${color} ${className}`} />
    case 'share':
      return <Icons.Share className={`text-${color} ${className}`} />
    case 'spark':
      return <Icons.Spark className={`text-${color} ${className}`} />
    case 'twitter':
      return <Icons.Twitter className={`text-${color} ${className}`} />
    default:
      return null
  }
}

export default Icon
