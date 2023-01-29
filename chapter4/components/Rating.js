import React, { useState } from 'react'

import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';

const Rating = (props) => {
    const [rating, setRating] = useState(props.rating);
    const style = {
        startStyle: {
            color: 'orange',

        }
    }
    return (
        <>
            <View className=" flex  flex-row items-center justify-start  border-b border-gray-200 py-5 mx-5 ">
                <Text className="text-2xl mr-5 ">Rating:</Text>
                <Text className=" text-2xl mr-2 ">{rating}</Text>
                {rating >= 1 ? (
                    <TouchableWithoutFeedback onPress={() => setRating(1)}>
                        <Text><Icon name="star" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setRating(1)}>
                        <Text><Icon name="star-o" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                )}
                {rating >= 2 ? (
                    <TouchableWithoutFeedback onPress={() => setRating(2)}>
                        <Text><Icon name="star" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setRating(2)}>
                        <Text><Icon name="star-o" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                )}
                {rating >= 3 ? (
                    <TouchableWithoutFeedback onPress={() => setRating(3)}>
                        <Text><Icon name="star" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setRating(3)}>
                        <Text><Icon name="star-o" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                )}
                {rating >= 4 ? (
                    <TouchableWithoutFeedback onPress={() => setRating(4)}>
                        <Text><Icon name="star" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setRating(4)}>
                        <Text><Icon name="star-o" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                )}
                {rating >= 4 ? (
                    <TouchableWithoutFeedback onPress={() => setRating(5)}>
                        <Text><Icon name="star" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={() => setRating(5)}>
                        <Text><Icon name="star-o" size={50} style={style.startStyle} /></Text>
                    </TouchableWithoutFeedback>
                )}
            </View>
        </>
    );
}

export default Rating;