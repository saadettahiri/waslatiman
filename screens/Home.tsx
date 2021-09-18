import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import Images from "../constants/images";

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
          borderBottomStartRadius: 200,
          borderBottomEndRadius: 200,
          backgroundColor: colors.darkGreen,
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Images.Settings
          width={40}
          height={40}
          style={{ position: "absolute", top: insets.top, start: 20 }}
        />
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
            fontFamily: "SegoeUI",
            fontSize: 15,
          }}
        >
          حسب توقيت فاس
        </Text>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <View
            key={index}
            style={{
              borderBottomWidth: 1,
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
          <Text style={{ color: colors.lightGray, fontSize: 18 }}>
            اللهمَّ إني أسألُك علمًا نافعًا ورزقًا طيبًا وعملًا متقبلً
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
