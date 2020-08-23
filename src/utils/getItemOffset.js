import getItemSettingsByType from './getItemSettingsByType'

const getItemOffset = (id, type) => {
    const {
        spriteSheetXAmount,
        width,
        height
    } = getItemSettingsByType(type)

    const index = id - 1
    const x = (index % spriteSheetXAmount) * width
    const y = (index / spriteSheetXAmount | 0) * height

    return [-x, -y]
}

export default getItemOffset
