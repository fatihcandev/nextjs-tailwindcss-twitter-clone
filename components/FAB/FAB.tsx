import React from 'react'

import { Button } from '../Button'
import { Icon } from '../Icon'

import styles from './FAB.module.css'

interface IFABProps {
  type: 'tweet' | 'message'
}

const FAB = ({ type }: IFABProps) => {
  return (
    <Button type="primary" className={styles.container}>
      <Icon name={type === 'tweet' ? 'composeTweet' : 'composeMessage'} />
    </Button>
  )
}

export default FAB
