import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuTabs } from './MenuBottomTab.navigation';
import { MenuDrawer } from './MenuDrawer.navigation';

export default function Navigation() {
    return (
        <NavigationContainer>
            <MenuTabs />
        </NavigationContainer>
    )
}