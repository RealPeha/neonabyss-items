import React from 'react'

// Components
import Item from '../components/Item'
import ItemList from '../components/ItemList'

// Items
import items from '../data/items.json'

const IndexPage = () => {
  const handleHover = (item) => {
    console.log(item);
  }

  return (
    <div className="wrapper">
      <div className="navigation">

      </div>
      <div className="main">
        <div className="content">
          <ItemList
            items={items}
            item={Item}
            spriteSheetXAmount={3}
            onHover={handleHover}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
