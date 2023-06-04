import React, { useLayoutEffect } from 'react'


import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealsList/MealItem';
import MealList from '../components/MealsList/MealList';


const MealsOVerviewSrceen = ({ route, navigation }) => {

    const catId = route.params.categoryId;


    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });

    }, [catId, navigation])



    return <MealList items={displayedMeals} />

}

export default MealsOVerviewSrceen

