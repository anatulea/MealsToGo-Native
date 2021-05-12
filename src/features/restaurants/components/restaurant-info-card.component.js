import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Test name",
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
