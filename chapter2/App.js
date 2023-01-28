import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <>
      <View className=" flex   border-b border-gray-200 pt-16 pb-5   bg-slate-400">
        <Text className="py-2  w-full text-center text-white text-xl font-bold " >APp Mobile Chapter 2</Text >
      </View>
      <View className="flex-1 container  pl-6 pr-6">
        <ProductList />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
