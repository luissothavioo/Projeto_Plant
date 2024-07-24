
import { Dispatch, SetStateAction, useState } from "react"
import { useFonts, Offside_400Regular } from '@expo-google-fonts/offside';
import { Inter_700Bold} from '@expo-google-fonts/inter';
import { OdorMeanChey_400Regular } from '@expo-google-fonts/odor-mean-chey';
import { Asap_700Bold_Italic, Asap_400Regular, Asap_600SemiBold } from '@expo-google-fonts/asap';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigation } from './src/navigation/index'
import { AuthProvider } from "./src/context/auth";

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [fontsLoaded] = useFonts({
    Offside_400Regular,
    Inter_700Bold,

    OdorMeanChey_400Regular,
    Asap_700Bold_Italic,
    Asap_400Regular,
    Asap_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <GestureHandlerRootView>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </GestureHandlerRootView>
    </>
  );
}