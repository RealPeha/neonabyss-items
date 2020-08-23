const getItemSettingsByType = (type) => {
    switch (type) {
        case 'item':
            return {
                spriteSheetXAmount: 25,
                height: 80,
                width: 80,
            }
        case 'weapon':
            return {
                spriteSheetXAmount: 3,
                height: 80,
                width: 80,
            }
        default:
            return {
                spriteSheetXAmount: 25,
                height: 80,
                width: 80,
            }
    }
}

export default getItemSettingsByType
