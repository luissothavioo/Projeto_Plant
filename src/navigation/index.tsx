import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuTabs } from './MenuBottomTab.navigation';
import { MenuDrawer } from './MenuDrawer.navigation';
import { LoginNavigation } from './login.navigation'

export default function Navigation() {
    return (
        <NavigationContainer>
            <LoginNavigation />
        </NavigationContainer>
    )
}