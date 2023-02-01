import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

import { FontAwesome as Icon } from "@expo/vector-icons";
import Rating from "./Rating";

const ProductCard = ({ data }) => {
  return (
    <>
      <View className="max-w-sm mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Text className="flex ">
          <Image
            className="rounded-t-lg object-cover h-48  min-w-full max-w-full "
            source={{
              //uri: "https://flowbite.com/docs/images/blog/image-1.jpg",
              uri: data.imageUrl,
            }}
          />
        </Text>
        <View className="p-5 ">
          <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.productName}
          </Text>
          <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.releasedDate}
          </Text>
          <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </Text>
          <Text className="inline-flex items-center py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Text className="mx-20"> Votar aqui</Text>
            <Text>
              <Icon name="arrow-right" size={12} />
            </Text>
          </Text>
          <Rating rating={data.rating} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default ProductCard;
