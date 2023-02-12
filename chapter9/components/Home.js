
import { ScrollView, Text, TouchableNativeFeedback, View } from "react-native"
import Footer from "./Footer";

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <View>
                <Text>Home</Text>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('componentA')}
                >
                    <Text>Component A</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('componentB')}
                >
                    <Text>Component B</Text>
                </TouchableNativeFeedback>
            </View>
            <Footer />
        </View >
    );
}

export default Home;