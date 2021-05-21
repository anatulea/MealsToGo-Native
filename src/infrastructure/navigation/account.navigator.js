import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Main"
      component={() => (
        <View>
          <Text>hello</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>hello</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
