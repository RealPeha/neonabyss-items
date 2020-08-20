import React, { useState } from 'react'

// Components
import Item from '../components/Item'
import ItemList from '../components/ItemList'

// Items
import items from '../data/items.json'

const IndexPage = () => {
  const [item, setItem] = useState()

  return (
    <div className="wrapper">>
      <div className="navigation">

      </div>
      <div className="main">
          {/* <div className="sidebar">
            {item && item.description}
          </div> */}
        <div className="content">
          <ItemList
            items={items}
            item={Item}
            spriteSheetXAmount={25}
            title="Items"
            onHover={setItem}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
