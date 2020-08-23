import React from 'react'

import Text from '../Text'

const Search = ({ onChange }) => {
    const handleInput = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className="search">
            <Text fontSize="1.25rem" color="#B4E124" uppercase>Поиск</Text>
            <input type="text" onChange={handleInput} />
        </div>
    )
}

export default Search
