import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import Images from "../constants/images";

const Awkat = () => {
  const insets = useSafeAreaInsets();
  const [times, setTimes] = useState([1, 2, 3, 4, 5]);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: colors.lightGray,
      }}
    >
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: colors.black,
          shadowOffset: { width: -5, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 9,
          elevation: 5,
        }}
      >
        <View
          style={{
            width: "80%",
            padding: 20,
            borderRadius: 10,
            backgroundColor: colors.white,
            alignItems: "center",
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
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity>
              <Images.Left
                width={30}
                height={30}
                style={{
                  transform: [{ rotateY: "180deg" }],
                }}
                color={colors.darkGreen}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Images.Schedule
                width={30}
                height={30}
                style={{ marginEnd: 10 }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: colors.darkGreen }}>
                  الأربعاء 07 صفر 1443
                </Text>
                <Text style={{ color: colors.lightBlack }}>شتنبر 2012115</Text>
              </View>
            </View>
            <TouchableOpacity style={{ justifyContent: "center" }}>
              <Images.Left width={30} height={30} color={colors.darkGreen} />
            </TouchableOpacity>
          </View>
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
              <Images.EnabledBell width={20} height={20} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Awkat;
