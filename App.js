import { StatusBar, View } from "react-native";
import Cesta from "./src/telas/Cesta";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import SplashScreen from "expo-splash-screen";

import cesta from "./src/mocks/cesta";

// Keep the splash screen visible while we fetch resources
export default function App() {
  let [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <StatusBar />
      <Cesta {...cesta} />
    </View>
  );
}
