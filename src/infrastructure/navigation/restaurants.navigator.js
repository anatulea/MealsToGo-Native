import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/rsetaurant-detail.screen";

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
        component={RestaurantDetailScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </RestaurantStack.Navigator>
  );
};
