export const totalCalories = (data) => {
    if (Array.isArray(data)) {
        return data.length > 0 ? data.reduce((accum, meal) =>
          accum + meal.carbs * 4 + meal.prot * 4 + meal.fat * 9
        , 0) : 0;
    } else {
        return Math.round(data.carbs * 4 + data.prot * 4 + data.fat * 9);
    }
};

export const totalCarbs = (data) => {
    if (Array.isArray(data)) {
        return parseFloat((data.length > 0 ? data.reduce((accum, meal) => accum + meal.carbs, 0) : 0).toFixed(1));
    } else {
        return data.carbs;
    }
};

export const totalProt = (data) => {
    if (Array.isArray(data)) {
        return parseFloat((data.length > 0 ? data.reduce((accum, meal) => accum + meal.prot, 0) : 0).toFixed(1));
    } else {
        return data.prot;
    }
};

export const totalFat = (data) => {
    if (Array.isArray(data)) {
        return parseFloat((data.length > 0 ? data.reduce((accum, meal) => accum + meal.fat, 0) : 0).toFixed(1));
    } else {
        return data.fat;
    }
};

export const calsAsRatio = (meals, user) => {
    const totalCals = exports.totalCalories(meals);
    const calorieGoal = user.calorieGoal;
    return calorieGoal ? totalCals / calorieGoal : 0;
};

export const carbsAsRatio = (meals) => {
    const totalCals = exports.totalCalories(meals);
    const totalCarbs = exports.totalCarbs(meals);
    return totalCals ? totalCarbs * 4 / totalCals : 0;
};

export const protAsRatio = (meals) => {
    const totalCals = exports.totalCalories(meals);
    const totalProt = exports.totalProt(meals);
    return totalCals ? totalProt * 4 / totalCals : 0;
};

export const fatsAsRatio = (meals) => {
    const totalCals = exports.totalCalories(meals);
    const totalFat = exports.totalFat(meals);
    return totalCals ? totalFat * 9 / totalCals : 0;
};

export const foodToMeal = (food, servingPortion) => {
    const carbs = food.carbs * servingPortion / food.servingSize;
    const prot = food.prot * servingPortion / food.servingSize;
    const fat = food.fat * servingPortion / food.servingSize;
    return {
      ...food,
        servingSize: servingPortion,
        carbs: carbs % Math.round(carbs) > 0 ? parseFloat(carbs.toFixed(1)) : carbs,
        prot: prot % Math.round(prot) > 0 ? parseFloat(prot.toFixed(1)) : prot,
        fat: fat % Math.round(fat) > 0 ? parseFloat(fat.toFixed(1)) : fat
    };

};
