import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import Images from "../constants/images";

const Settings = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        width: "90%",
        alignSelf: "center",
        paddingTop: 20,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          top: insets.top,
          start: 0,
          backgroundColor: colors.darkGreen,
          padding: 10,
          borderRadius: 50,
        }}
        onPress={() => navigation.pop()}
      >
        <Images.Back
          width={30}
          height={30}
          style={{ transform: [{ rotateY: "180deg" }] }}
          color={colors.white}
        />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          alignItems: "center",
          width: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              color: colors.darkGreen,
              fontFamily: "SegoeUIBold",
            }}
          >
            sdqdsq
          </Text>
        </View>
        <View>
          <Text>aera</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          width: "100%",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              color: colors.darkGreen,
              fontFamily: "SegoeUIBold",
            }}
          >
            sdqdsq
          </Text>
        </View>
        <View>
          <Text>aera</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: colors.darkGreen,
            fontFamily: "SegoeUIBold",
          }}
        >
          شارك التطبيق
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            marginTop: 10,
            backgroundColor: "red",
          }}
        >
          <Text>aze</Text>
          <Text>aze</Text>
          <Text>aze</Text>
        </View>
      </View>
    </View>
  );
};

export default Settings;
