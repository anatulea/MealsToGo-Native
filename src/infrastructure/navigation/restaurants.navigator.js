import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        headerMode="none"
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        headerMode="none"
        name="RestaurantDetail"
        component={() => <Text>Restaurant DETAIL</Text>}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RestaurantStack.Navigator>
  );
};
