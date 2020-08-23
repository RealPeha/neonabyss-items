import React from 'react'

import { Text, Item } from '../'

const ItemInfo = ({ item }) => {
    const {
        name,
        description,
        offset,
        type,
    } = item

    return (
        <>
            {name && <Text fontSize="1.5rem" color="#FF01DD" bold uppercase>{name}</Text>}
            <Item type={type} offset={offset} />
            {description && (
                    <div className="text-container">
                        <Text color="#837AAF">{description}</Text>
                    </div>
            )}
        </>
    )
}

export default ItemInfo
