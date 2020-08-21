import React, { useState } from 'react'

// Components
import Item from '../components/Item'
import Weapon from '../components/Weapon'
import ItemList from '../components/ItemList'
import Search from '../components/Search'

// Items
import itemsRaw from '../data/items_ru.json'
import weaponsRaw from '../data/weapons_ru.json'

const IndexPage = () => {
  const [item, setItem] = useState()
  const [items, setItems] = useState(itemsRaw)
  const [weapons, setWeapons] = useState(weaponsRaw)

  const handleSearch = (query) => {
    const filteredItems = itemsRaw.filter(item => {
      return item.description.includes(query)
    })

    const filteredWeapons = weaponsRaw.filter(item => {
      return item.description.includes(query)
    })

    setItems(filteredItems)
    setWeapons(filteredWeapons)
  }

  return (
    <div className="wrapper">
      <div className="navigation">

      </div>
      <div className="main">
        <div className="sidebar-wrapper">
          <div className="sidebar">
            {item && item.description
              ? item.description
              : 'Тут будет какое-то сообщение'
            }
          </div>

          <Search onChange={handleSearch}/>
        </div>
        <div className="content">
          {/* Items */}
          <ItemList
            items={items}
            item={Item}
            spriteSheetXAmount={25}
            title="Items"
            onHover={setItem}
          />

          {/* Weapons */}
          <ItemList
            items={weapons}
            item={Weapon}
            spriteSheetXAmount={3}
            title="Weapons"
            onHover={setItem}
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
