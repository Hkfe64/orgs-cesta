import { SafeAreaView, StatusBar, View } from "react-native";
import Cesta from "./src/telas/Cesta";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";

import cesta from "./src/mocks/cesta";
import { useCallback, useEffect } from "react";

// Keep the splash screen visible while we fetch resources
export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await preventAutoHideAsync();
      } catch (error) {
        console.warn(`Erro ${error}`);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        await hideAsync();
      }
    } catch (error) {
      console.warn(`Erro ${error}`);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
