import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import Images from "../constants/images";
import Settings from "./Settings";

const HomeScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [times, setTimes] = useState([1, 2, 3, 4, 5]);
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 10,
      }}
      bounces={false}
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
        <TouchableOpacity
          style={{ position: "absolute", top: insets.top, end: 20 }}
          onPress={() => navigation.push("Settings")}
        >
          <Images.Settings width={35} height={35} />
        </TouchableOpacity>
        <Images.Bismillah width={widthPercentageToDP("70%")} />
      </View>
      <View
        style={{
          width: widthPercentageToDP("80%"),
          marginTop: 10,
          backgroundColor: colors.white,
          paddingVertical: 10,
          paddingHorizontal: 30,
          alignItems: "center",
          borderRadius: 10,
          shadowColor: colors.black,
          shadowOffset: { width: -5, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 9,
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: colors.darkGreen,
            fontFamily: "SegoeUIBold",
            fontSize: 20,
          }}
        >
          اوقات الصلاة
        </Text>
        <Text
          style={{
            color: colors.lightBlack,
            fontFamily: "SegoeUIBold",
            fontSize: 15,
          }}
        >
          حسب توقيت فاس
        </Text>
        {times.map((item, index) => (
          <View
            key={index}
            style={{
              borderBottomWidth: times.length - 1 === index ? 0 : 1,
              borderBottomColor: colors.black,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: colors.lightBlack,
                fontFamily: "SegoeUIBold",
                fontSize: 20,
              }}
            >
              الفجر
            </Text>
            <Text
              style={{
                color: colors.lightBlack,
                fontFamily: "SegoeUIBold",
                fontSize: 20,
              }}
            >
              05:53
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          marginTop: 10,
          width: "80%",
          paddingTop: 10,
          alignItems: "center",
          borderRadius: 10,
          shadowColor: colors.black,
          shadowOffset: { width: -5, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 9,
          elevation: 5,
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: colors.white,
            width: "100%",
            alignItems: "center",
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: colors.darkGreen,
              fontFamily: "SegoeUIBold",
            }}
          >
            ذكر اليوم
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: colors.darkGreen,
            paddingVertical: 20,
            paddingHorizontal: 10,
            alignItems: "center",
            borderBottomStartRadius: 10,
            borderBottomEndRadius: 10,
          }}
        >
          <Text
            style={{
              color: colors.lightGray,
              fontSize: 18,
              textAlign: "left",
            }}
          >
            اللهمَّ إني أسألُك علمًا نافعًا ورزقًا طيبًا وعملًا متقبلً
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Home;
