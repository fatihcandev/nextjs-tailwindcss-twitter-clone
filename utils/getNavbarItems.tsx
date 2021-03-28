import { ILinkButtonProps } from '../components/LinkButton/LinkButton'

import { showFilledIcon } from './showFilledIcon'

interface GetNavbarItemsArgs {
  hrefs: string[]
  pathname: string
}

interface INavbarItemProps extends ILinkButtonProps {
  label: string
}

export const getNavbarItems = ({ hrefs, pathname }: GetNavbarItemsArgs): INavbarItemProps[] => {
  const getColorClass = (href: string): string =>
    showFilledIcon(href, pathname) ? 'text-blue' : 'text-text-primary'

  return [
    {
      href: hrefs[0],
      leftIcon: showFilledIcon(hrefs[0], pathname) ? 'homeFill' : 'home',
      iconSize: '26.25',
      label: 'Home',
      className: getColorClass(hrefs[0]),
    },
    {
      href: hrefs[1],
      leftIcon: showFilledIcon(hrefs[1], pathname) ? 'explorerFill' : 'explore',
      iconSize: '26.25',
      label: 'Explore',
      className: getColorClass(hrefs[1]),
    },
    {
      href: hrefs[2],
      leftIcon: showFilledIcon(hrefs[2], pathname) ? 'notificationFill' : 'notification',
      iconSize: '26.25',
      label: 'Notifications',
      className: getColorClass(hrefs[2]),
    },
    {
      href: hrefs[3],
      leftIcon: showFilledIcon(hrefs[3], pathname) ? 'messagesFill' : 'messages',
      iconSize: '26.25',
      label: 'Messages',
      className: getColorClass(hrefs[3]),
    },
    {
      href: hrefs[4],
      leftIcon: showFilledIcon(hrefs[4], pathname) ? 'bookmarkFill' : 'bookmark',
      iconSize: '26.25',
      label: 'Bookmarks',
      className: getColorClass(hrefs[4]),
    },
    {
      href: hrefs[5],
      leftIcon: showFilledIcon(hrefs[5], pathname) ? 'listsFill' : 'lists',
      iconSize: '26.25',
      label: 'Lists',
      className: getColorClass(hrefs[5]),
    },
    {
      href: hrefs[6],
      leftIcon: showFilledIcon(hrefs[6], pathname) ? 'profileFill' : 'profile',
      iconSize: '26.25',
      label: 'Profile',
      className: getColorClass(hrefs[6]),
    },
  ]
}
