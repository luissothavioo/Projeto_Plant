import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    //TEXTO
    text: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        paddingBottom: 150,
        textAlign: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        color: colors.black,
    },

    //ESTRUTURA
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.green,
        borderRadius: 5,
    },

    icon: {
        fontSize: 28,
        color: colors.black,
        padding: 5,
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%",
    },
})