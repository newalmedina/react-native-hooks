import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView, Text, View } from "react-native";
import LoginForm from "./components/LoginForm";

export default function App() {
  const title = "App Chapter 6";


  return (
    <>
      <View className=" flex   border-b border-gray-200 pt-16 pb-5   bg-slate-400">
        <Text className="py-2  w-full text-center text-white text-xl font-bold ">
          {title}
        </Text>
      </View>
      <View className="flex-1 container  px-7 pt-5">
        <SafeAreaView >
          <LoginForm />
        </SafeAreaView>
      </View>

      <StatusBar style="auto" />
    </>
  );
}
