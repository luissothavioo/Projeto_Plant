import { ScreenLogin, ScreenCadastrar } from '../screens'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

type MenuStackParam = {
    Login: undefined
    Register: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Login">
export type LoginTypes = {
    navigation: MenuScreenNavigation
}

export function LoginNavigation() {
    const Stack = createStackNavigator<MenuStackParam>();
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