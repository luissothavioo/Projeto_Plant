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
    headPesquisar: {
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
    },
    body: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 15,
    },
    //CAMPOS
    quadroBranco: {
        backgroundColor: colors.whiteBackground,
        borderRadius: 25,
        width: 370,
        height: 350,
        padding: 5,
    },
    quadroPreto: {
        backgroundColor: colors.black,
        width: 165,
        height: 230,
        borderRadius: 25,
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: 20,
    },
    //ELEMENTOS
    todasButton: {
        backgroundColor: colors.black,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 70,
    },
    image: {
        alignItems: "center",
    },
    campoPesquisar: {
        width: 200,
        height: 20,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: colors.cinza,
        borderColor: colors.black,
    },
    icone: {
        paddingRight: 5,
        paddingLeft: 5,
    },
    //TEXTO
    textTitleQuadroPreto: {
        color: colors.white,
        fontSize: 21,
        textAlign: "center",
        fontFamily: 'OdorMeanChey_400Regular',
    },
    subtitleText: {
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'Inter_700Bold',
        paddingTop: 15,
    },
    pesquisar: {
        paddingLeft: 5,
        paddingTop: 2,
        fontFamily: 'Asap_400Regular',
    },
    //PADDING
    paddingQuadroPreto: {
        padding: 5,
    },
})