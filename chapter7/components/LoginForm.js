import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TextInput, Button, TouchableWithoutFeedback } from "react-native";
const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    var error = null
    const sendForm = () => {
        error = 0
        setEmailError("")
        setPasswordError("")

        if (email.length == 0) {
            setEmailError("Email is required")
            error = 1
        } else if (email.length < 6) {
            setEmailError("Email show be minimum 6 characters")
            error = 1
        }

        if (password.length == 0) {
            setPasswordError("Password is required")
            error = 1
        } else if (password.length < 3) {
            setPasswordError("Password show be minimum 3 characters")
            error = 1
        } else if (password.indexOf(' ') >= 0) {
            setPasswordError("Password can not contain spaces")
            error = 1
        }
        if (error == 0) {
            alert(`
            email:${email},
            password:${password}
            `)
            console.log("enviado")
        }


    }

    return (
        <>
            <View className="mb-5 ">
                <Text className="text-lg font-bold">Email</Text>
                <TextInput
                    className="mt-3 border-b border-gray-200 pb-3 text-base"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                    placeholder="Introduce mail"
                />
                <Text className="text-red-700 mt-2">{emailError}</Text>
            </View>

            <View className="mb-5 ">
                <Text className="text-lg font-bold">Password</Text>
                <TextInput
                    className="mt-3 border-b border-gray-200 pb-3 text-base"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                    placeholder="Introduce Password"
                />
                <Text className="text-red-700 mt-2">{passwordError}</Text>
            </View>
            <View className="mt-3 ">
                <TouchableWithoutFeedback
                    onPress={sendForm}
                >
                    <Text
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded text-center"
                    >Send form</Text>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

export default LoginForm;