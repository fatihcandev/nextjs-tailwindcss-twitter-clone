import React, { useState } from 'react'

import { Icon } from '../Icon'

import styles from './Search.module.css'

interface ISearchProps {
  className?: string
}

const Search = ({ className = '' }: ISearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const toggleFocus = () => {
    setIsFocused((prevState) => !prevState)
  }

  return (
    <div className={`${styles.container} ${isFocused ? styles.focused : ''} ${className}`}>
      <div>
        <Icon name="search" size="19" className={`${isFocused ? styles.iconFocused : ''}`} />
      </div>
      <input
        type="text"
        placeholder="Search Twitter"
        className={styles.input}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
    </div>
  )
}

export default Search
