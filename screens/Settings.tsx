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
          shadowColor: colors.black,
          shadowOffset: { width: -5, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 9,
          elevation: 5,
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
          shadowColor: colors.black,
          shadowOffset: { width: -5, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 9,
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Images.EnabledBell
            width={20}
            height={20}
            style={{ marginEnd: 10 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: colors.darkGreen,
              fontFamily: "SegoeUIBold",
            }}
          >
            إلغاء تنبيهات
          </Text>
        </View>
        <View>
          <Text>Switch</Text>
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
          shadowColor: colors.black,
          shadowOffset: { width: -5, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 9,
          elevation: 5,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Images.Help width={20} height={20} style={{ marginEnd: 10 }} />
          <Text
            style={{
              fontSize: 20,
              color: colors.darkGreen,
              fontFamily: "SegoeUIBold",
            }}
          >
            المساعدة
          </Text>
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
            width: 220,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={{ alignItems: "center", flex: 1 }}>
            <Images.Facebook width={60} height={60} />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Images.Twitter width={60} height={60} />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Images.Whatsapp width={60} height={60} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;
