import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";
import Children from "./components/Children";

export default function App() {
  const title = "App Chapter 5";

  const products = () => {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 2,
        numOfReviews: 12,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5,
        numOfReviews: 2,
      },
    ];
  };

  const productList = products().map((product) => {
    return <ProductCard key={product.productName} data={product} />;
  });

  return (
    <>
      <View className=" flex   border-b border-gray-200 pt-16 pb-5   bg-slate-400">
        <Text className="py-2  w-full text-center text-white text-xl font-bold ">
          {title}
        </Text>
      </View>
      <ScrollView className="flex-1 container  px-7 pt-5">
        <Children>
          Este contenido se introdujo con Prop children
        </Children>
        {products().length >= 1
          ? productList
          : <Text className="py-2">No hay resultados o productos para mostrar</Text>
        }
      </ScrollView>
      <StatusBar style="auto" />
    </>
  );
}
