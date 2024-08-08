import { StyleSheet } from 'react-native'
import { colors } from '../../styles/globalstyle'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: colors.whiteBackground,
        width: 370,
        marginTop: 20,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 20,
        padding: 10,
        fontFamily: 'Asap_400Regular',
    },
    containerBotao: {
        flex: 0.08,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
        width: 250,
        borderRadius: 100,
    },
    botao: {
        position: "absolute",
    }
})