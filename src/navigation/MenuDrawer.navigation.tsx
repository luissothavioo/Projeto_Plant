import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { MenuTabs } from './MenuBottomTab.navigation';
import { colors } from '../styles/globalstyle'
import { Ionicons } from '@expo/vector-icons';

type MenuDrawerParam = {
    Tab: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Tab">
export type DrawerTypes = {
    navigation: MenuScreenNavigation
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgb(143, 135, 131)'},
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: 'rgba(143, 135, 131, 0.5)',
            },
            drawerActiveTintColor: colors.black,
            drawerInactiveTintColor: colors.black
        }}>
            <Drawer.Screen name='Tab' component={MenuTabs}
                options={{
                    drawerLabel: 'Pagina Inicial',
                    headerTitle: '',
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.black} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}