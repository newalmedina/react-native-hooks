import React, { useState } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Rating from './components/Rating';

export default function App() {

  const Separator = () => <View className=" border-b border-gray-400 pb-4 pt-2 mx-5" />
  const style = {
    btnStyle: {
      color: 'orange',

    }
  }
  const [isValid, setIsValid] = useState(true);
  const PressBtn = () => {
    alert("Botón desactivado")
    alert("Has pulsado botón")
    setIsValid(false)
  }

  return (
    <>
      <View className=" flex   border-b border-gray-200 pt-16 pb-5   bg-slate-400">
        <Text className="py-2  w-full text-center text-white text-xl font-bold " >APp Mobile Chapter 3</Text >
      </View>
      <View className="flex-1 container  pt-10">
        <Button title="Click Me" onPress={PressBtn} disabled={!isValid} style={style.btnStyle} />
        <Separator />
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />

      </View>
      <StatusBar style="auto" />
    </>
  );


}

