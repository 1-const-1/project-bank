import React from 'react'
import { SlMagnifier } from 'react-icons/sl'

import './SearchButton.sass'

/**
 * This component enables users to perform searches 
 * for specific information or tagged data/ It provides
 * a user-friendly interface for initiating a search queries,
 * helping users find the content quickly.
 * @returns 
 */
const SearchButton: React.FC<{}> = () => {
  return (
    <div
      className='search-btn-cnt'>
      <button>
        <SlMagnifier />
      </button>
    </div>
  )
}

export default SearchButton