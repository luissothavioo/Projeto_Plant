import { ScreenLogin, ScreenCadastrar } from '../screens'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/globalstyle';

type MenuStackParam = {
    Login: undefined
    Register: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuStackParam, "Login">
export type LoginTypes = {
    navigation: MenuScreenNavigation
}

export function LoginNavigation() {
    const Stack = createBottomTabNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
           <Stack.Screen options={{
            headerTitle: "Login"
           }} name="Login" component={ScreenLogin}/>

           <Stack.Screen options={{
            headerTitle: "Registrar" 
           }} name="Register" component={ScreenCadastrar}/>
        </Stack.Navigator>
    )
}