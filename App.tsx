import React from "react";

import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";
import theme from './src/theme'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";


import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./src/routes/auth.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthRoutes />
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </NavigationContainer>
    </ThemeProvider>
  );
}
