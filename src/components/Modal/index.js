import React from 'react'

import { Text, ItemInfo } from '../'

const Modal = ({
  data = {},
  onClose,
}) => {
    return (
      <>
        <div className="blackout" onClick={onClose} />
        <div className="info-block modal">
          {data
            ? <ItemInfo item={data} />
            : (
              <div className="text-container">
                <Text color="#837AAF">Тут будет какое-то описание сайта</Text>
              </div>
            )
          }
        </div>
      </>
    )
}

export default Modal
