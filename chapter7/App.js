import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import GitHub from "./components/Github";

export default function App() {
  const title = "App Chapter 7";


  return (
    <>
      <View className=" flex   border-b border-gray-200 pt-16 pb-5   bg-slate-400">
        <Text className="py-2  w-full text-center text-white text-xl font-bold ">
          {title}
        </Text>
      </View>
      <View className="flex-1 container  px-7 pt-5">
        <ScrollView >
          <GitHub />
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </>
  );
}
