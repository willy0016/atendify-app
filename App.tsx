import { StatusBar } from 'expo-status-bar';
import {ThemeProvider} from "styled-components";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import {Home} from "./src/screens/Home";
import {Loading} from "./src/components/Loading";
import theme from "./src/global/styles/theme"

export default function App() {
    let[fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    });

    if(!fontsLoaded) {
    //if(true) {
        return <Loading />;
    }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  );
}