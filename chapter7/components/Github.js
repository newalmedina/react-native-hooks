import React, { useState, useEffect } from 'react'
import { Text, View, ActivityIndicator, Image, TouchableWithoutFeedback, Linking, TextInput } from 'react-native'
import axios from 'axios'

const GitHub = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("greg");
    const [loadin, setLoading] = useState(true);
    const url = `https://api.github.com/search/users?q=${searchTerm}`

    const getData = () => {

        axios.get(url)
            .then(function (response) {
                // manejar respuesta exitosa
                setData(response.data.items)
                setLoading(false)
                console.log(data.length)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const ListUsers = data.map((user) => {
        return (
            <View key={user.id} className="max-w-sm mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Text className="flex ">
                    <Image
                        className="rounded-t-lg object-cover h-48  min-w-full max-w-full "
                        source={{
                            //uri: "https://flowbite.com/docs/images/blog/image-1.jpg",
                            uri: user.avatar_url,
                        }}
                    />
                </Text>
                <View className="p-5 ">
                    <Text className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                        Id: {user.id}
                    </Text>
                    <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Login: {user.login}
                    </Text>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL(user.html_url)}>
                        <Text className="inline-flex items-center py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Text className="mx-20"> View</Text>
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    })

    return (
        <>
            {loadin &&
                <View className="mt-20">
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
            <View className="mb-10 ">
                <Text className="text-lg font-bold">numero registros: {data.length}</Text>
                <TextInput
                    className="mt-3 border-solid border-2 border-sky-500  border-gray-200 p-3 text-base rounded-lg"
                    onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                    value={searchTerm}
                    placeholder="Introduce Busqueda"
                />
                <TouchableWithoutFeedback onPress={() => getData()}>
                    <Text className="inline-flex items-center py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Text className="mx-20"> buscar</Text>
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            {ListUsers}


        </>
    );
}

export default GitHub;