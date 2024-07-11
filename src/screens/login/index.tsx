import { ImageBackground, Text, View, KeyboardAvoidingView, TextInput, Alert } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

import React, { useState } from 'react';
import { Entypo, MaterialIcons} from "@expo/vector-icons"
import { ComponentButtonInterface } from '../../components/ButtonSlide'
import {  } from '../../navigation/login.navigation'

export interface IAuthenticate {
    email?: string;
    password?: string;
}
export function login({ navigation }: LoginTypes) {
    const slide = require('../../assets/VasoPlanta1.png')
    const [data, setData] = useState<IAuthenticate>();
    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleRegister() {
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate) {
        setData({ ...data, ...item})
    }

    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text style={styleText.textTitle}>Plant</Text>
                    <Text style={styles.text}>seu diário botânico pessoal</Text>
                </View>
            </View>
        </ImageBackground>
    )
}