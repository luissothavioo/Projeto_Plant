import { StyleSheet } from 'react-native'
import { colors } from '../../styles/globalstyle'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: colors.cinza,
        width: 370,
        marginTop: 20,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 20,
        padding: 10,
        fontFamily: 'Asap_400Regular',
    },
    botao: {
        position: "absolute",
        paddingBottom: 1,
        paddingRight: 0,
    }
})