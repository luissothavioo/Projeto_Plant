import { StyleSheet, } from "react-native";
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    //ESTRUTURA
    head: {
        flexDirection: "row",
        height: 50,
        paddingLeft: 10,
    },
    body: {
        flexDirection: "row",
        justifyContent: "center",
    },
    //CAMPOS
    quadroBranco: {
        backgroundColor: colors.whiteBackground,
        borderRadius: 25,
        width: 370,
        height: 230,
        paddingLeft: 5,
        paddingRight: 5,
    },
    quadroPreto: {
        backgroundColor: colors.black,
        width: 110,
        height: 165,
        borderRadius: 25,
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: 30,
    },
    //ELEMENTOS
    todasButton: {
        backgroundColor: colors.black,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 20,
        width: 80,
    },
    image: {
        position: "absolute",
        paddingLeft: 40,
        paddingBottom: 95,
    },
    //TEXTO
    textTitleQuadroPreto: {
        color: colors.white,
        fontSize: 21,
        textAlign: "center",
        fontFamily: 'OdorMeanChey_400Regular',
    },
    textQuadroPreto: {
        color: colors.white,
        fontSize: 10,
        textAlign: "center",
    },
    todasText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: 'Asap_400Regular',
    },
    subtitleText: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'Inter_700Bold',
        paddingTop: 15,
    },
    //PADDING
    paddingTodasButton: {
        justifyContent: "center",
        paddingTop: 15,
        paddingLeft: 5,
    },
    paddingQuadroPreto: {
        padding: 3,
    },
})