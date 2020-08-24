import React, { useState, useEffect, useCallback } from 'react'

// Components
import {
  ItemInfo,
  Search,
  ItemList,
  Text,
  Modal
} from '../components'

import getItemOffset from '../utils/getItemOffset'

// Items
import itemsRaw from '../data/items_ru.json'
import weaponsRaw from '../data/weapons_ru.json'

const IndexPage = ({ location, navigate }) => {
  const [selectedItem, setSelectedItem] = useState()
  const [modalData, setModalData] = useState()
  const [{ items, weapons }, setItems] = useState({
    items: itemsRaw,
    weapons: weaponsRaw,
  })

  const handleSearch = (query) => {
    const filteredItems = itemsRaw.filter(item => {
      return item.description.includes(query)
    })

    const filteredWeapons = weaponsRaw.filter(item => {
      return item.description.includes(query)
    })

    setItems({
      items: filteredItems,
      weapons: filteredWeapons,
    })
  }

  const handleModalOpen = useCallback(item => {
    setModalData(item)
    navigate(`?item=${item.id}${item.type ? `&type=${item.type}` : ''}`, { replace: true })
  }, [navigate])

  const handleModalClose = useCallback(() => {
    setModalData(null)
  }, [])

  useEffect(() => {
    const search = location.search.slice(1).split('&').reduce((acc, query) => {
      const [name, value] = query.split('=')
    
      return {...acc, [name]: value}
    }, {})

    const {
      item: id,
      type = ''
    } = search

    if (id) {
      const item = (type === 'weapon' ? weaponsRaw : itemsRaw).find(item => item.id === +id)

      setModalData({
        ...item,
        type,
        offset: getItemOffset(item.id, type),
      })
    }
  }, [location.search])

  return (
    <div className="main">
      {modalData && <Modal
        data={modalData}
        onClose={handleModalClose}
      />}
      <div className="sidebar-wrapper">
        <div className="sidebar info-block">
          {selectedItem
            ? <ItemInfo item={selectedItem} />
            : (
              <div className="text-container">
                <Text color="#837AAF">Тут будет какое-то описание сайта</Text>
              </div>
            )
          }
        </div>

        <Search onChange={handleSearch}/>
      </div>
      <div className="content">
        {/* Items */}
        <ItemList
          items={items}
          title="Items"
          type="item"
          onHover={setSelectedItem}
          onClick={handleModalOpen}
        />

        {/* Weapons */}
        <ItemList
          items={weapons}
          title="Weapons"
          type="weapon"
          onHover={setSelectedItem}
          onClick={handleModalOpen}
        />
      </div>
    </div>
  )
}

export default IndexPage
