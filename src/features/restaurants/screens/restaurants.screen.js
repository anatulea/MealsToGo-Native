import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import Search from "../../../components/Search";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "orange",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "pink",
  },
});
