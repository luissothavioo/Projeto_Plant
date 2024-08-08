import { StyleSheet, } from "react-native";
import { colors } from "../../styles/globalstyle"

export const styles = StyleSheet.create({
    //ESTRUTURA
    head: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
    },
    body: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingTop: 5,
    },
    //CAMPOS
    quadroBranco: {
        backgroundColor: colors.whiteBackground,
        borderRadius: 25,
        width: 370,
        height: 460,
        padding: 5,
    },
    quadroPreto: {
        backgroundColor: colors.black,
        width: 165,
        height: 360,
        borderRadius: 25,
        paddingLeft: 5,
        paddingTop: 10,
    },
    informationArea: {
        padding: 5,
    },
    legendaArea: {
       justifyContent: "center",
       alignItems: "center",
    },
    //ELEMENTOS
    image: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        paddingLeft: 125,
        paddingTop: 50,
    },
    //TEXTO
    textTitleQuadroPreto: {
        color: colors.white,
        fontSize: 15,
        textAlign: "left",
        fontFamily: 'Asap_700Bold_Italic',
    },
    text: {
        color: colors.white,
        fontSize: 10,
        textAlign: "left",
        fontFamily: 'Asap_400Regular',
    },
    subtitleText: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'Inter_700Bold',
        paddingTop: 15,
    },
    textBold: {
        fontFamily: 'Asap_600SemiBold',
    },
    legenda: {
        color: colors.white,
        fontSize: 10,
        fontFamily: 'Asap_700Bold_Italic',
    },
})