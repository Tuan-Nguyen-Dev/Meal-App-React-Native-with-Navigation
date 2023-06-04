import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'


import MealList from '../components/MealsList/MealList'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'
// import { FavoritesContext } from '../store/context/favorites-context'

const FavoritesScreen = () => {

    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);


    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    if (favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favotite meals yet.</Text>
        </View>
    }
    return (
        <MealList items={favoriteMeals} />
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})