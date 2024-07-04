import { Dispatch, SetStateAction, useState } from "react"
import { Slide1 } from "./src/screens/Slide1"
import { Slide2 } from "./src/screens/Slide2"
import { Slide3 } from "./src/screens/Slide3"
import { Slide4 } from "./src/screens/Slide4"
import { useFonts, Offside_400Regular } from '@expo-google-fonts/offside';
import { Inter_700Bold} from '@expo-google-fonts/inter';
import { OdorMeanChey_400Regular } from '@expo-google-fonts/odor-mean-chey';
import { Asap_700Bold_Italic, Asap_400Regular, Asap_600SemiBold } from '@expo-google-fonts/asap';

import 'react-native-gesture-handler';
import Navigation from './src/navigation'

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
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

  //if (page == 1) {
    //return <Slide1 setPageI={setPage} />
  //}else if (page == 2) {
    //return <Slide2 setPageI={setPage} />
  //}else if (page == 3) {
    //return <Slide3 setPageI={setPage} />
  //}else if (page == 4) {
    //return <Slide4 setPageI={setPage} />
  //}
  return (
    <Navigation />
  );
}