import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        marginBottom: 4,
    },
    type: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    }
})