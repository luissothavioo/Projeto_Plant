import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";
import { useAuth } from "../../hook/auth";
import { ComponentButtonInterface } from "../../components"

export function Inicial({ navigation }: MenuTabTypes) {
    const slide = require('../../assets/VasoPlanta1.png')
    const { user, signOut } = useAuth()
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text style={styleText.textTitle}>Plant</Text>
                    <Text style={styles.text}>seu diário botânico pessoal</Text>
                </View>

                <ComponentButtonInterface title="Sair" type="primary"
                    onPressI={async () => await signOut()}
                />
            </View>
            
        </ImageBackground>
    )
}
