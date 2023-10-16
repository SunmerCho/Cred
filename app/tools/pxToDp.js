import { Dimensions,StatusBar } from 'react-native'

export const uiWidthPx = 390
export const uiHeightPx = 844
export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const pxToDpW = uiElementPx => {
    return (uiElementPx * windowWidth) / uiWidthPx;
}

export const pxToDpH = uiElementPx => {
    return (uiElementPx * windowHeight) / uiHeightPx;
}