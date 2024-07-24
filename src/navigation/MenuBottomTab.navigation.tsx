import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home, Plantas, Todas, Informações } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome6, FontAwesome, AntDesign } from '@expo/vector-icons';
import { colors } from "../styles/globalstyle"

type MenuTabParam = {
    Home: undefined
    Plantas: undefined
    Todas: undefined
    Informações: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="house-chimney" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Plantas" component={Plantas}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="plant-wilt" size={24} color="black" />
                    )
                    
                }}
            />
            <Tab.Screen name="Todas" component={Todas}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="search" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Informações" component={Informações}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="eye" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )

}