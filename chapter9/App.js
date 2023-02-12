import React from "react"
import { StatusBar } from "expo-status-bar"
import { ScrollView, Text, View, Button } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const title = "App Chapter 8"

  const userName = "Newal Medsadsadsdina"


  return (
    <>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="home2">
          <Stack.Screen name="home" component={Home}
            options={{
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#00cc00"
                />
              ),
              headerLeft: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#00cc00"
                />
              ),
            }}
          />
          <Stack.Screen name="componentA" component={ComponentB} />
          <Stack.Screen name="componentB" component={ComponentB} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
