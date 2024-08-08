import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { useAuth } from "../../hook/auth";
import { apiMessage } from "../../services/data";
import { IResponseMessage } from "../../services/data/Message";
import { FlatList } from "react-native-gesture-handler";
import { styleContainer } from "../../styles/globalstyle"
import { MessageTypes } from "../../navigation/message.navigation";
import { colors } from "../../styles/globalstyle";
import { AntDesign, Entypo } from "@expo/vector-icons";

export function Mensagem({ navigation }: MessageTypes) {
    const slide = require('../../assets/VasoPlanta1.png')
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        navigation.addListener("focus", () => loadMessage())
    }, [])
    interface itemMessage {
        item: IResponseMessage
    }
    const renderItem = (({ item }: itemMessage) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Nome: {item.user.name}</Text>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Mensagem: {item.message}</Text>
            </View>
        )
    })
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                {
                    message.length > 0 && (
                        <FlatList
                            data={message}
                            renderItem={renderItem}
                            keyExtractor={(item) => String(item.id)}
                        />
                    )
                }
            </View>
            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botao}
                    onPress={() => navigation.navigate("CadMessage")}>
                    <Entypo name="plus" size={48} color={colors.black} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}