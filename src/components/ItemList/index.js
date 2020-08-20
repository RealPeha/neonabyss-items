import React from 'react'

const ItemList = ({
    items = [],
    item: Item,
    itemWidth = 80,
    itemHeight = 80,
    spriteSheetXAmount,
    title,
    onHover
}) => {
  return (
    <div className="item-list" data-title={title}>
      {
        items.map((item, index) => {
          const x = (index % spriteSheetXAmount) * itemWidth
          const y = (index / spriteSheetXAmount | 0) * itemHeight

          return (
            <Item
              key={item.name}
              offset={[-x, -y]}
              onHover={() => onHover(item)}
            />
          )
        })
      }
    </div>
  )
}

export default React.memo(ItemList)
