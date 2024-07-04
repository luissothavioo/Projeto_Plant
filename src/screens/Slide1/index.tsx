import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function Slide1({ navigation }: MenuTabTypes) {
    const slide = require('../../assets/VasoPlanta1.png')
    
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text style={styleText.textTitle}>Plant</Text>
                    <Text style={styles.text}>seu diário botânico pessoal</Text>
                </View>

                <TouchableOpacity style={styleElementos.butt}
                    onPress={() => navigation.navigate("Slide2")}
                >
                    <Text>Começar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}