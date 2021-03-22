import React, { useState } from 'react'

import { Icon } from '../Icon'

import styles from './Search.module.css'

interface ISearchProps {
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const Search = ({ value = '', onChange, className = '' }: ISearchProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const toggleFocus = () => {
    setIsFocused((prevState) => !prevState)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target
    onChange && onChange(value)
  }

  const handleClearSearch = () => {
    onChange && onChange('')
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
        value={value}
        onChange={handleChange}
      />
      {value.length > 0 && (
        <div className={styles.clearButton} role="button" onClick={handleClearSearch}>
          <Icon name="x" size="16" />
        </div>
      )}
    </div>
  )
}

export default Search
