import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import ProductCard from "./components/ProductCard";

export default function App() {
  const title = "App Chapter 4";
  return (
    <>
      <View className=" flex   border-b border-gray-200 pt-16 pb-5   bg-slate-400">
        <Text className="py-2  w-full text-center text-white text-xl font-bold ">
          {title}
        </Text>
      </View>
      <View className="flex-1 container  px-7 pt-5">
        <ProductCard />
      </View>
      <StatusBar style="auto" />
    </>
  );
}
