
import { Text, View } from 'react-native';

const products = [
    "Learn react",
    "Learn Js6",
    "Learn react native",
    "Learn Laravel",
    "Learn symphony",
    "Learn entioty framework",
    "Learn spring boot",
    "Learn HTML",
    "Learn Css",
    "Learn bootstrap",
]

const getProduct = products.map((product) => {
    return (
        <View key={product.toString()} className=" flex   border-b border-gray-200 pb-4 pt-4 ">
            <Text className="py-2  w-full " >{product}</Text >
        </View>
    )

})

const ProductList = () => {
    return (
        <>
            {getProduct}
        </>
    );
}

export default ProductList;