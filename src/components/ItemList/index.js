import React from 'react'

import { Item } from '../'

import getItemOffset from '../../utils/getItemOffset'

const ItemList = ({
    items = [],
    title,
    type,
    onHover,
    onClick,
}) => {
  return (
    <div className="item-list" data-title={title}>
      {
        items.map((item) => {
          const offset = getItemOffset(item.id, type)

          return (
            <Item
              key={item.name}
              type={type}
              offset={offset}
              onHover={() => onHover(item)}
              onLeave={() => onHover()}
              onClick={() => onClick({
                ...item,
                offset,
                type,
              })}
            />
          )
        })
      }
    </div>
  )
}

export default React.memo(ItemList)
