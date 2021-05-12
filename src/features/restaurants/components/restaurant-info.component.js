import React from "react";
import { Text } from "react-native";
import { Card, Title } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "test name",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    ],
    address = "1000 str ",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  console.log("restaurant", name);

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
};
