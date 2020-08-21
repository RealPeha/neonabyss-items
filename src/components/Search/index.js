import React, { useRef } from 'react'

const Search = ({ onChange }) => {
    // const [search, setSearch] = useState('');
    const searchRef = useRef();

    const handleInput = (e) => {
        onChange(e.target.value)
    }

    return (
        <input
            className="search-input"
            ref={searchRef}
            onChange={handleInput}
        />
    )
}

export default Search
