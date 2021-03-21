import React from 'react'
import Link from 'next/link'

import { Button } from '../Button'

interface ILinkButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

const LinkButton = ({ href, className, children }: ILinkButtonProps) => {
  return (
    <Link href={href} passHref>
      <Button href={href} className={className}>
        {children}
      </Button>
    </Link>
  )
}

export default LinkButton
