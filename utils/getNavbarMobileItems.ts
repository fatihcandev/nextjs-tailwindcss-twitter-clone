import { IIconButtonProps } from '../components/IconButton/IconButton'

import { showFilledIcon } from './showFilledIcon'

interface GetNavbarMobileItemsArgs {
  commonProps: IIconButtonProps
  hrefs: string[]
  pathname: string
}

export const getNavbarMobileItems = ({
  commonProps,
  hrefs,
  pathname,
}: GetNavbarMobileItemsArgs): IIconButtonProps[] => {
  const getColorClass = (href: string) =>
    showFilledIcon(href, pathname) ? 'text-blue' : 'text-text-secondary'

  return [
    {
      ...commonProps,
      href: hrefs[0],
      className: getColorClass(hrefs[0]),
      iconName: showFilledIcon(hrefs[0], pathname) ? 'homeFill' : 'home',
    },
    {
      ...commonProps,
      href: hrefs[1],
      className: getColorClass(hrefs[1]),
      iconName: showFilledIcon(hrefs[1], pathname) ? 'searchFocused' : 'search',
    },
    {
      ...commonProps,
      href: hrefs[2],
      className: getColorClass(hrefs[2]),
      iconName: showFilledIcon(hrefs[2], pathname) ? 'notificationFill' : 'notification',
    },
    {
      ...commonProps,
      href: hrefs[3],
      className: getColorClass(hrefs[3]),
      iconName: showFilledIcon(hrefs[3], pathname) ? 'messagesFill' : 'messages',
    },
  ]
}
