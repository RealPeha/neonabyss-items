import React from 'react'
import css from '@emotion/css'

const Weapon = ({ offset, onHover, onLeave }) => {
    const [x = 0, y = 0] = offset

    return (
        <div
            className="item"
            css={css`background-position: ${x}px ${y}px;`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        />
    )
}

export default Weapon
