import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Slide4() {
    const slide = require('../../assets/VasoPlanta4.png')
    const margarida = require('../../assets/margarida.png')
    const vasinho = require('../../assets/vasinho.png')
    const terra = require('../../assets/terra.png')
    
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <Text style={styleText.textTitle}>Plant</Text>
                
                <View style={styles.quadroBranco}>
                    <View style={styles.head}>
                        <Text style={styleText.titleBoard}>Margarida</Text>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.quadroPreto}>
                            <View style={styles.informationArea}>
                                <Text style={styles.textTitleQuadroPreto}>Nome científico</Text>
                                <Text style={styles.text}>Leucanthemum vulgare</Text>
                            </View>
                            <View style={styles.informationArea}>
                                <Text style={styles.textTitleQuadroPreto}>Classificação superior</Text>
                                <Text style={styles.text}>Leucanthemum</Text>
                            </View>
                            <View style={styles.informationArea}>
                                <Text style={styles.textTitleQuadroPreto}>Família</Text>
                                <Text style={styles.text}>Asteraceae</Text>
                            </View>
                            <View style={styles.informationArea}>
                                <Text style={styles.textTitleQuadroPreto}>Ordem</Text>
                                <Text style={styles.text}>Asterales</Text>
                            </View>
                            <View style={styles.informationArea}>
                                <Text style={styles.textTitleQuadroPreto}>Reino</Text>
                                <Text style={styles.text}>Plantae</Text>
                            </View>
                            <View style={styles.informationArea}>
                                <Text style={styles.textTitleQuadroPreto}>Cuidados</Text>
                                <Text style={styles.text}> <Text style={styles.textBold}>• raios de sol</Text> ao menos em <Text style={styles.textBold}>uma parte do dia</Text>;</Text>
                                <Text style={styles.text}> <Text style={styles.textBold}>• não</Text> gosta muito de <Text style={styles.textBold}>frio</Text>;</Text>
                                <Text style={styles.text}> <Text style={styles.textBold}>• rega:</Text> ao menos <Text style={styles.textBold}>uma vez</Text> ao dia moderadamente;</Text>
                            </View>
                            
                            <View style={styles.body}>
                                <View style={styles.legendaArea}>
                                    <Image source={vasinho}/>
                                    <Text style={styles.legenda}>Vaso drenável</Text>
                                </View>
                                <View style={styles.legendaArea}>
                                    <Image source={terra}/>
                                    <Text style={styles.legenda}>Solo rico e fértil</Text>
                                </View>
                            </View>
                        </View>
                        
                        <View style={styles.image}>
                            <Image source={margarida} />
                        </View>
                    </View>
                </View>

                <View style={styleText.subtitleArea}>
                    <Text style={styles.subtitleText}>veja as informações para melhor enraizar sua planta</Text>
                </View>
            </View>
        </ImageBackground>
    )
}