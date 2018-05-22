import foods from '../fixtures/foods';
import meals from '../fixtures/meals';
import user from '../fixtures/user';
import {
  totalCalories,
  totalCarbs,
  totalProt,
  totalFat,
  calsAsRatio,
  carbsAsRatio,
  protAsRatio,
  fatsAsRatio,
  foodToMeal
} from '../../utils/utils';


describe('totalCalories', () => {
    test('should return total calories for food item when passed food item', () => {
      expect(totalCalories(foods[0])).toBe(45);
    });

    test('should return total calories for an array of food items when passed an array', () => {
        expect(totalCalories(foods)).toBe(totalCalories(foods.reduce((food, sum) => ({
          carbs: sum.carbs + food.carbs,
          prot: sum.prot + food.prot,
          fat: sum.fat + food.fat,
        }), {
          carbs: 0,
          prot: 0,
          fat: 0
        })));
    });
});

describe('totalCarbs', () => {
    test('should return carbs from a food item', () => {
        expect(totalCarbs(foods[0])).toBe(foods[0].carbs);
    });

    test('should return total carbs for an array of food items when passed an array', () => {
        expect(totalCarbs(foods)).toBe(foods.reduce((food, sum) => ({
          carbs: totalCarbs(food) + sum.carbs
        }), {
          carbs: 0
        }).carbs);
    });
});

describe('totalProt', () => {
    test('should return prot from a food item', () => {
        expect(totalProt(foods[0])).toBe(foods[0].prot);
    });

    test('should return total prot for an array of food items when passed an array', () => {
        expect(totalProt(foods)).toBe(foods.reduce((food, sum) => ({
          prot: totalProt(food) + sum.prot
        }), {
          prot: 0
        }).prot);
    });
});

describe('totalFat', () => {
    test('should return fat from a food item', () => {
        expect(totalFat(foods[0])).toBe(foods[0].fat);
    });

    test('should return total fat for an array of food items when passed an array', () => {
        expect(totalFat(foods)).toBe(foods.reduce((food, sum) => ({
          fat: totalFat(food) + sum.fat
        }), {
          fat: 0
        }).fat);
    });
});

describe('calsAsRatio', () => {
    test('should return total calories of passed in meals as a ratio of the passed in user calorieGoal', () => {
        const totalCals = totalCalories(meals);
        expect(calsAsRatio(meals, user)).toBe(totalCals / user.calorieGoal);
    });

    test('should return 0 when user calorieGoal not truthy', () => {
        const totalCals = totalCalories(meals);
        expect(calsAsRatio(meals, { ...user, calorieGoal: 0 })).toBe(0);
    });
});

describe('carbsAsRatio', () => {
    test('should return ratio of calories from carbs from passed in meals', () => {
        expect(carbsAsRatio(meals)).toBe(totalCarbs(meals) * 4 / totalCalories(meals));
    });

    test('should return 0 when passed empty meals', () => {
        expect(carbsAsRatio([])).toBe(0);
    });
});

describe('protAsRatio', () => {
    test('should return ratio of calories from prot from passed in meals', () => {
        expect(protAsRatio(meals)).toBe(totalProt(meals) * 4 / totalCalories(meals));
    });

    test('should return 0 when passed empty meals', () => {
        expect(protAsRatio([])).toBe(0);
    });
});

describe('fatsAsRatio', () => {
    test('should return ratio of calories from fat from passed in meals', () => {
        expect(fatsAsRatio(meals)).toBe(totalFat(meals) * 9 / totalCalories(meals));
    });

    test('should return 0 when passed empty meals', () => {
        expect(fatsAsRatio([])).toBe(0);
    });
});

test('foodToMeal should take a food object and conver it to a meal object using a servingPortion', () => {
    const servingPortion = 2;
    expect(foodToMeal(foods[0], servingPortion)).toEqual({
      ...foods[0],
      servingSize: servingPortion,
      carbs: foods[0].carbs * servingPortion / foods[0].servingSize,
      prot: foods[0].prot * servingPortion / foods[0].servingSize,
      fat: foods[0].fat * servingPortion / foods[0].servingSize
    });
});
