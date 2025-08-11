import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
  return focused ? (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image
        source={icon}
        className="w-5 h-5"
        style={{ tintColor: "#151312" }}
      />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  ) : (
    <View className="justify-center items-center mt-4 rounded-full">
      <Image
        source={icon}
        className="w-5 h-5"
        style={{ tintColor: "#A8B5DB" }}
      />
    </View>
  );
};

const getTabOptions = (title : string, icon: any) => ({
  title,
  tabBarIcon : ({focused} : {focused : boolean}) => (
    <TabIcon focused={focused} title={title} icon={icon} />
  )
})

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown : false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={getTabOptions("Home",icons.home)}
      />
      <Tabs.Screen
        name="profile"
        options={getTabOptions("Profile", icons.person)}
      />
      <Tabs.Screen
        name="saved"
        options={getTabOptions("Saved", icons.save)}
      />
      <Tabs.Screen
        name="search"
        options={getTabOptions("Search", icons.search)}
      />
    </Tabs>
  );
};

export default _Layout;
