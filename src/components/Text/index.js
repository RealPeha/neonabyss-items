import React from 'react'

import css from '@emotion/css'

const Text = ({
    fontSize = '14px',
    color = '#FFF',
    uppercase,
    bold,
    font,
    children
}) => {
    return (
        <span
            css={css`
                font-size: ${fontSize};
                color: ${color};
                ${uppercase ? `text-transform: uppercase;` : ``}
                ${bold ? `font-weight: bold;` : ``}
                ${font ? `font-family: ${font};` : ``}
            `}
        >
            {children}
        </span>
    )
}

export default Text
