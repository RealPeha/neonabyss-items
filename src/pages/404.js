import React from 'react'
import { Link } from 'gatsby'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1>
                Смерть — единственный выход
            </h1>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default NotFound
