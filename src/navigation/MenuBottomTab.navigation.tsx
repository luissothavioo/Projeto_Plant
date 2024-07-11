import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ScreenSlide1, ScreenSlide2, ScreenSlide3, ScreenSlide4 } from '../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome6, FontAwesome, AntDesign } from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
    Slide3: undefined
    Slide4: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide2">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Slide1" component={ScreenSlide1}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="house-chimney" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Slide2" component={ScreenSlide2}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="plant-wilt" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Slide3" component={ScreenSlide3}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="search" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Slide4" component={ScreenSlide4}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="eye" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )

}