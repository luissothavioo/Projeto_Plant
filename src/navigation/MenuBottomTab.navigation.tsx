import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home, Plantas, Todas, Informações } from '../screens';
import { FontAwesome, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { colors } from "../styles/globalstyle"
import { MessageNavigation } from './message.navigation'

type MenuTabParam = {
    Home: undefined
    Plantas: undefined
    Todas: undefined
    Informações: undefined
    Mensagem: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarActiveBackgroundColor: 'rgb(143, 135, 131)',
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveBackgroundColor: 'rgb(143, 135, 131)',
                tabBarInactiveTintColor: colors.white,
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={26} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="Plantas" component={Plantas}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="flower" size={25} color={colors.white} />
                    )
                    
                }}
            />
            <Tab.Screen name="Todas" component={Todas}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="search" size={23} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="Informações" component={Informações}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="book" size={23} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="Mensagem" component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="chat" size={24} color={colors.white} />
                    ),
                }}
            />
        </Tab.Navigator>
    )

}