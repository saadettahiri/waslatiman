import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";

export enum AzkarType {
  Sabah,
  Masa,
}

type Props = {
  type: AzkarType;
};

const Azkar = ({ type }: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          height: 50 + insets.top,
          backgroundColor: colors.darkGreen,
          position: "relative",
        }}
        source={require("../assets/images/headerBackground.png")}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 25,
              fontFamily: "SegoeUIBold",
            }}
          >
            {type === AzkarType.Sabah ? "أذكار الصباح" : "أذكار المساء"}
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          flex: 1,
        }}
      >
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 5, 10]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 20 }}
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={{
                backgroundColor: colors.darkGreen,
                width: "100%",
                marginVertical: 20,
                borderRadius: 10,
                paddingVertical: 30,
                paddingHorizontal: 20,
                shadowColor: colors.black,
                shadowOffset: { width: -5, height: 10 },
                shadowOpacity: 0.15,
                shadowRadius: 9,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  start: 20,
                  transform: [{ translateY: -20 }],
                  borderRadius: 50,
                  padding: 10,
                  backgroundColor: colors.darkGreen,
                }}
              >
                <Text
                  style={{ color: colors.white, fontFamily: "SegoeUIBold" }}
                >
                  عدد التكرار {index}
                </Text>
              </View>
              <Text
                style={{
                  color: colors.white,
                  fontFamily: "SegoeUIBold",
                  textAlign: "left",
                  fontSize: 18,
                }}
              >
                أَصبَحْنا على فِطرةِ الإسلامِ، وعلى كَلِمةِ الإخلاصِ، وعلى دِينِ
                نَبيِّنا محمَّدٍ صلَّى اللهُ عليه وسلَّمَ، وعلى مِلَّةِ أبِينا
                إبراهيمَ، حَنيفًا مُسلِمًا، وما كان مِنَ المُشرِكينَ
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Azkar;
