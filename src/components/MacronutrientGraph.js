import React from 'react';
import { connect } from 'react-redux';
import {
  totalCalories,
  totalCarbs,
  totalProt,
  totalFat,
  calsAsRatio,
  carbsAsRatio,
  protAsRatio,
  fatsAsRatio
} from '../utils/utils';

export const MacronutrientGraph = (props) => {
    // styles for macronutrient progress bar fill
    const calsBarFillStyle = props.hidden ? {} : { width: Math.min(100, Math.round(props.calsRatio * 100)) + '%' };
    const carbsBarFillStyle = props.hidden ? {} : { width: Math.min(100, Math.round(props.carbsRatio * 100)) + '%' };
    const protBarFillStyle = props.hidden ? {} : { width: Math.min(100, Math.round(props.protRatio * 100)) + '%' };
    const fatBarFillStyle = props.hidden ? {} : { width: Math.min(100, Math.round(props.fatRatio * 100)) + '%' };
    // styles for macronutrient goal marker
    const calsGoalMarkerStyle = { left: props.cals > props.user.calorieGoal ? Math.round((1 - (props.cals - props.user.calorieGoal) / props.cals) * 100) + '%' : '100%' };
    const carbsGoalMarkerStyle = { left: props.user.carbsRatioGoal + '%' };
    const protGoalMarkerStyle = { left: props.user.protRatioGoal + '%' };
    const fatGoalMarkerStyle = { left: props.user.fatRatioGoal + '%' };
    // styles for macronutrient goal bar fill
    const carbsBarGoalStyle = { width: props.user.carbsRatioGoal + '%' };
    const protBarGoalStyle = { width: props.user.protRatioGoal + '%' };
    const fatBarGoalStyle = { width: props.user.fatRatioGoal + '%' };

    return (
        <div className={props.hidden ? "MacronutrientGraph--hidden" : "MacronutrientGraph"}>
            <div className="MacronutrientGraph__container">
                <div className="MacronutrientGraph__row">
                    <div className="MacronutrientGraph__rowNutrient">
                        <span className="MacronutrientGraph__rowNutrientLabel">Cals</span>
                    </div>
                    <div className="MacronutrientGraph__rowTotal">
                        <span className="MacronutrientGraph__rowTotalAmount">{props.cals}</span>
                    </div>
                    <div className="MacronutrientGraph__rowProgressBar">
                        <div className="MacronutrientGraph__rowProgressBarFill--cals" style={calsBarFillStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoal--cals"></div>
                        <div className="MacronutrientGraph__rowProgressBarGoalMarker" style={calsGoalMarkerStyle}></div>
                    </div>
                </div>
                <div className="MacronutrientGraph__row">
                    <div className="MacronutrientGraph__rowNutrient">
                        <span className="MacronutrientGraph__rowNutrientLabel">Carbs</span>
                    </div>
                    <div className="MacronutrientGraph__rowTotal">
                        <span className="MacronutrientGraph__rowTotalAmount">{props.carbs}g</span>
                    </div>
                    <div className="MacronutrientGraph__rowProgressBar">
                        <div className="MacronutrientGraph__rowProgressBarFill--carbs" style={carbsBarFillStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoal--carbs" style={carbsBarGoalStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoalMarker" style={carbsGoalMarkerStyle}></div>
                    </div>
                </div>
                <div className="MacronutrientGraph__row">
                    <div className="MacronutrientGraph__rowNutrient">
                        <span className="MacronutrientGraph__rowNutrientLabel">Prot</span>
                    </div>
                    <div className="MacronutrientGraph__rowTotal">
                        <span className="MacronutrientGraph__rowTotalAmount">{props.prot}g</span>
                    </div>
                    <div className="MacronutrientGraph__rowProgressBar">
                        <div className="MacronutrientGraph__rowProgressBarFill--prot" style={protBarFillStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoal--prot" style={protBarGoalStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoalMarker" style={protGoalMarkerStyle}></div>
                    </div>
                </div>
                <div className="MacronutrientGraph__row">
                    <div className="MacronutrientGraph__rowNutrient">
                        <span className="MacronutrientGraph__rowNutrientLabel">Fat</span>
                    </div>
                    <div className="MacronutrientGraph__rowTotal">
                        <span className="MacronutrientGraph__rowTotalAmount">{props.fat}g</span>
                    </div>
                    <div className="MacronutrientGraph__rowProgressBar">
                        <div className="MacronutrientGraph__rowProgressBarFill--fat" style={fatBarFillStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoal--fat" style={fatBarGoalStyle}></div>
                        <div className="MacronutrientGraph__rowProgressBarGoalMarker" style={fatGoalMarkerStyle}></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
  cals: totalCalories(props.food ? props.food : state.meals),
  carbs: totalCarbs(props.food ? props.food : state.meals),
  prot: totalProt(props.food ? props.food : state.meals),
  fat: totalFat(props.food ? props.food : state.meals),
  calsRatio: calsAsRatio(props.food ? props.food : state.meals, state.user),
  carbsRatio: carbsAsRatio(props.food ? props.food : state.meals),
  protRatio: protAsRatio(props.food ? props.food : state.meals),
  fatRatio: fatsAsRatio(props.food ? props.food : state.meals),
  user: state.user
});


export default connect(mapStateToProps)(MacronutrientGraph);
