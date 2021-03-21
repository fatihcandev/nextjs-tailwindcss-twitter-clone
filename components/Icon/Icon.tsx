import React from 'react'

import { IconName } from '../../types'
import * as Icons from '../icons'

interface IIconProps {
  name: IconName
  color: string
  className?: string
  svgProps?: React.SVGProps<SVGSVGElement>
}

const Icon = ({ name, color, svgProps, className = '' }: IIconProps) => {
  switch (name) {
    case 'arrowBottom':
      return <Icons.ArrowBottom className={`${color} ${className}`} {...svgProps} />
    case 'bookmark':
      return <Icons.Bookmark className={`${color} ${className}`} {...svgProps} />
    case 'bookmarkFill':
      return <Icons.BookmarkFill className={`${color} ${className}`} {...svgProps} />
    case 'emoji':
      return <Icons.Emoji className={`${color} ${className}`} {...svgProps} />
    case 'explore':
      return <Icons.Explore className={`${color} ${className}`} {...svgProps} />
    case 'explorerFill':
      return <Icons.ExplorerFill className={`${color} ${className}`} {...svgProps} />
    case 'gif':
      return <Icons.Gif className={`${color} ${className}`} {...svgProps} />
    case 'home':
      return <Icons.Home className={`${color} ${className}`} {...svgProps} />
    case 'homeFill':
      return <Icons.HomeFill className={`${color} ${className}`} {...svgProps} />
    case 'like':
      return <Icons.Like className={`${color} ${className}`} {...svgProps} />
    case 'lists':
      return <Icons.Lists className={`${color} ${className}`} {...svgProps} />
    case 'listsFill':
      return <Icons.ListsFill className={`${color} ${className}`} {...svgProps} />
    case 'media':
      return <Icons.Media className={`${color} ${className}`} {...svgProps} />
    case 'messages':
      return <Icons.Messages className={`${color} ${className}`} {...svgProps} />
    case 'messagesFill':
      return <Icons.MessagesFill className={`${color} ${className}`} {...svgProps} />
    case 'more':
      return <Icons.More className={`${color} ${className}`} {...svgProps} />
    case 'notification':
      return <Icons.Notification className={`${color} ${className}`} {...svgProps} />
    case 'notificationFill':
      return <Icons.NotificationFill className={`${color} ${className}`} {...svgProps} />
    case 'options':
      return <Icons.Options className={`${color} ${className}`} {...svgProps} />
    case 'profile':
      return <Icons.Profile className={`${color} ${className}`} {...svgProps} />
    case 'profileFill':
      return <Icons.ProfileFill className={`${color} ${className}`} {...svgProps} />
    case 'question':
      return <Icons.Question className={`${color} ${className}`} {...svgProps} />
    case 'reply':
      return <Icons.Reply className={`${color} ${className}`} {...svgProps} />
    case 'retweet':
      return <Icons.Retweet className={`${color} ${className}`} {...svgProps} />
    case 'search':
      return <Icons.Search className={`${color} ${className}`} {...svgProps} />
    case 'share':
      return <Icons.Share className={`${color} ${className}`} {...svgProps} />
    case 'spark':
      return <Icons.Spark className={`${color} ${className}`} {...svgProps} />
    case 'twitter':
      return <Icons.Twitter className={`${color} ${className}`} {...svgProps} />
    default:
      return null
  }
}

export default Icon
