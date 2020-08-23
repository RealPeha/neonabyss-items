import React from 'react'
import css from '@emotion/css'

const noop = () => {}

const Item = ({
    type,
    offset,
    onHover = noop,
    onLeave = noop,
    onClick = noop,
}) => {
    const [x = 0, y = 0] = offset

    return (
        <div
            className={`item${type ? ` ${type}` : ''}`}
            css={css`background-position: ${x}px ${y}px;`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        />
    )
}

export default Item
