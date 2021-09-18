import React from "react";
import { View, Text } from "react-native";

export enum AzkarType {
  Sabah,
  Masa,
}

type Props = {
  type: AzkarType;
};

const Azkar = ({ type }: Props) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Azkar;
