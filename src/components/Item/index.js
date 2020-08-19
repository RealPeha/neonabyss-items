import React from 'react'
import css from '@emotion/css'

const Item = ({ offset, onHover }) => {
    const [x = 0, y = 0] = offset

    return (
        <div
            className="item"
            css={css`background-position: ${x}px ${y}px;`}
            onMouseEnter={onHover}
        />
    )
}

export default Item
