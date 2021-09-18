import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { I18nManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AzkarMasa from "./screens/AzkarMasa";
import AzkarSabah from "./screens/AzkarSabah";
import Qibla from "./screens/Qibla";
import Awkat from "./screens/Awkat";
import Images from "./constants/images";
import { colors } from "./constants/colors";

I18nManager.forceRTL(true);

const Tabs = createBottomTabNavigator();

export default function App() {
  const [hasLoadedImages, setLoadedImages] = useState(false);
  let [hasLoadedFonts] = useFonts({
    SegoeUIBold: require("./assets/fonts/Segoe_UI_Bold.ttf"),
    SegoeUI: require("./assets/fonts/Segoe_UI.ttf"),
  });
  const loadImages = async () => {
    const images = [
      require("./assets/images/bismillah.svg"),
      require("./assets/images/half-moon.svg"),
      require("./assets/images/home.svg"),
      require("./assets/images/kaaba.svg"),
      require("./assets/images/morning.svg"),
      require("./assets/images/praying.svg"),
      require("./assets/images/settings.svg"),
      require("./assets/images/back.svg"),
      require("./assets/images/enabledBell.svg"),
      require("./assets/images/disabledBell.svg"),
      require("./assets/images/compass.svg"),
      require("./assets/images/schedule.svg"),
      require("./assets/images/facebook.svg"),
      require("./assets/images/twitter.svg"),
      require("./assets/images/whatsapp.svg"),
      require("./assets/images/help.svg"),
      require("./assets/images/headerBackground.png"),
      require("./assets/images/left.svg"),
    ];

    const cacheImages = images.map((item) => {
      return Asset.fromModule(item).downloadAsync();
    });

    await Promise.all([cacheImages]);
  };

  if (!hasLoadedImages || !hasLoadedFonts) {
    return (
      <AppLoading
        startAsync={loadImages}
        onFinish={() => setLoadedImages(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: colors.lightGreen },
          }}
        >
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarLabel: "الرئيسية",
              tabBarLabelStyle: { color: colors.white, fontSize: 12 },
              tabBarIcon: ({ color, focused }) => (
                <View style={{ opacity: focused ? 1 : 0.5 }}>
                  <Images.Home width={20} height={20} />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="AzkarSabah"
            component={AzkarSabah}
            options={{
              headerShown: false,
              tabBarLabel: "أذكار الصباح",
              tabBarLabelStyle: { color: colors.white, fontSize: 12 },
              tabBarIcon: ({ color, focused }) => (
                <View style={{ opacity: focused ? 1 : 0.5 }}>
                  <Images.Morning width={30} height={30} />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="Qibla"
            component={Qibla}
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ color, focused }) => (
                <View
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: 50,
                    width: 75,
                    height: 75,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 10,
                    opacity: focused ? 1 : 0.5,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 5.46,

                    elevation: 9,
                  }}
                >
                  <Images.Kaaba width={30} height={30} />
                  <Text style={{ color: colors.darkGreen }}>القبلة</Text>
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="AzkarMasa"
            component={AzkarMasa}
            options={{
              headerShown: false,
              tabBarLabel: "أذكار المساء",
              tabBarLabelStyle: { color: colors.white, fontSize: 12 },
              tabBarIcon: ({ color, focused }) => (
                <View style={{ opacity: focused ? 1 : 0.5 }}>
                  <Images.HalfMoon width={30} height={30} />
                </View>
              ),
            }}
          />
          <Tabs.Screen
            name="Awkat"
            component={Awkat}
            options={{
              headerShown: false,
              tabBarLabel: "أوقات الصلاة",
              tabBarLabelStyle: { color: colors.white, fontSize: 12 },
              tabBarIcon: ({ color, focused }) => (
                <View style={{ opacity: focused ? 1 : 0.5 }}>
                  <Images.Praying width={30} height={30} />
                </View>
              ),
            }}
          />
        </Tabs.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
