import React, { } from "react";
import {
  Text,
  View,
} from "react-native";


const Children = (props) => {

  return (
    <>
      <View className="mb-3">
        <Text> {props.children}</Text>
      </View>
    </>
  );
};


export default Children;
