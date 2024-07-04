import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide, ButtonSlide2 } from "../../components/ButtonSlide"

export function Slide3({ setPageI }: IPagina) {
    const slide = require('../../assets/VasoPlanta3.png')
    const cacto = require('../../assets/cacto.png')
    const espada = require('../../assets/espada.png')
    const filtro = require('../../assets/filtro.png')
    const lupa = require('../../assets/lupa.png')
    
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <Text style={styleText.textTitle}>Plant</Text>
                
                <View style={styles.quadroBranco}>
                    <View style={styles.head}>
                        <Text style={styleText.titleBoard}>Descubra</Text>
                        <View style={styles.headPesquisar}>
                            <View style={styles.icone}>
                                <Image source={filtro} />
                            </View>
                            <View style={styles.campoPesquisar}>
                                <Text style={styles.pesquisar}>Digite a planta</Text>
                            </View>
                            <View style={styles.icone}>
                                <Image source={lupa} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.paddingQuadroPreto}>
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={cacto} />
                                </View>
                                <Text style={styles.textTitleQuadroPreto}>Cacto</Text>
                            </View>
                        </View>
                        <View style={styles.paddingQuadroPreto}>
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={espada} />
                                </View>
                                <Text style={styles.textTitleQuadroPreto}>Espada</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styleText.subtitleArea}>
                    <Text style={styles.subtitleText}>descubra novas belezas para desabrochar sua vida</Text>
                </View>
            </View>

            <View style={styleContainer.containerButton}>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(1)} />
                </View>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View>
                <View style={styleElementos.butt}>
                    <ButtonSlide2 onPressI={() => setPageI(3)} />
                </View>
                <View style={styleElementos.butt}>
                    <ButtonSlide onPressI={() => setPageI(4)} />
                </View>
            </View>
        </ImageBackground>
    )
}