import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export function Slide1({ navigation }: MenuStackTypes) {
    const slide = require('../../assets/VasoPlanta1.png')
    
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <Text style={styles.text}>Slide 1</Text>
                <TouchableOpacity style={styleElementos.butt}
                    onPress={() => navigation.push("Slide2")}
                >
                    <Text>Slide 2</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}