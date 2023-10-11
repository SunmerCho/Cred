import { Dimensions } from 'react-native'

const uiWidthPx = 390
const uiHeightPx = 844
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const pxToDpW = uiElementPx => {
    return (uiElementPx * windowWidth) / uiWidthPx;
}

export const pxToDpH = uiElementPx => {
    return (uiElementPx * windowHeight) / uiHeightPx;
}