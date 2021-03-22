import React, { useState } from 'react'

import { Layout } from '../../components/Layout'

const Explore = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <Layout headerIcon="options" searchValue={searchValue} onSearchValueChange={setSearchValue}>
      Explore
    </Layout>
  )
}

export default Explore
