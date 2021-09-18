import React from "react";
import { View, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import Images from "../constants/images";

const Qibla = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingBottom: 10,
        backgroundColor: colors.lightGray,
      }}
    >
      <View
        style={{
          width: "100%",
          height: heightPercentageToDP("35%"),
          borderBottomStartRadius: 200,
          borderBottomEndRadius: 200,
          backgroundColor: colors.darkGreen,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "SegoeUI",
            color: colors.white,
            fontSize: 100,
          }}
        >
          القبلة
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Images.Compass
          width={widthPercentageToDP("100%")}
          height={widthPercentageToDP("100%")}
        />
      </View>
    </View>
  );
};

export default Qibla;
