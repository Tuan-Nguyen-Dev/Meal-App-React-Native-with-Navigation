import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { Image } from 'react-native'


import { useNavigation } from '@react-navigation/native'
import MealDetail from '../MealDetail'


const MealItem = ({ id, title, imageUrl, duration, affordability, complexity }) => {
    const navigation = useNavigation();
    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    {/* Display Image and Title */}
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    {/* Display discription  */}
                    <MealDetail duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

})