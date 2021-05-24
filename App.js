import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import AppLoading from "expo-app-loading";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
// require("firebase/auth");

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQm8uMLfU0iuC0alRCYDiHYdicZI2QwxM",
  authDomain: "mealstogo-22cfe.firebaseapp.com",
  projectId: "mealstogo-22cfe",
  storageBucket: "mealstogo-22cfe.appspot.com",
  messagingSenderId: "854021424475",
  appId: "1:854021424475:web:085c5cd04917c73ef6867e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <FavouritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavouritesContextProvider>
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
