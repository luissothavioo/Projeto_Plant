import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
import { ScreenLogin, ScreenCadastrar } from '../screens'

type LoginDrawerParamList = {
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = DrawerNavigationProp<LoginDrawerParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
    const Stack = createDrawerNavigator<LoginDrawerParamList>()
    return {
        <Drawer.Navigator id='login' screenOption={{ headerShown: false }}>
            <Drawer.Screen name='login' component={ScreenLogin} />
            <Drawer.Screen name='Register' component={ScreenCadastrar} />
        </Drawer.Navigator>
    }
}