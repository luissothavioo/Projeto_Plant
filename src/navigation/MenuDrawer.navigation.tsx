import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { MenuTabs } from './MenuBottomTab.navigation';
import { colors } from '../styles/globalstyle'
import { FontAwesome5, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';

type MenuDrawerParam = {
    Home: undefined
    Plantas: undefined
    Todas: undefined
    Informações: undefined
    Mensagem: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Home">
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
                backgroundColor: 'rgb(143, 135, 131)',
            },
            drawerActiveTintColor: colors.black,
            drawerInactiveTintColor: colors.black
        }}>
            <Drawer.Screen name='Home' component={MenuTabs}
                options={{
                    drawerLabel: 'Pagina Inicial',
                    headerTitle: '',
                    drawerIcon: () => (
                        <FontAwesome name="home" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Plantas' component={MenuTabs}
                options={{
                    drawerLabel: 'Minhas Plantas',
                    headerTitle: '',
                    drawerIcon: () => (
                        <Ionicons name="flower" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Todas' component={MenuTabs}
                options={{
                    drawerLabel: 'Pesquisar Plantas',
                    headerTitle: '',
                    drawerIcon: () => (
                        <FontAwesome5 name="search" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Informações' component={MenuTabs}
                options={{
                    drawerLabel: 'Informações',
                    headerTitle: '',
                    drawerIcon: () => (
                        <FontAwesome5 name="book" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Mensagem' component={MenuTabs}
                options={{
                    drawerLabel: 'Chat',
                    headerTitle: '',
                    drawerIcon: () => (
                        <Entypo name="chat" size={24} color={colors.white} />
                    ),
                }}
            />
            
        </Drawer.Navigator>
    )
}