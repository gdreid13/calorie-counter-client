import React from 'react';
import LogButton from '../Button'

export default class mealInputform extends React.Component {
	static defaultProps = {
		history: {
			push: () => { }
		},
	};
	state = {
		isLogged: true,
	}

	isLogged = (e) => {



		getMealsAndCalories = (e) => {
			e.preventDefault();
			const { breakfast_food, breakfast_calorie, lunch_food, lunch_calorie, dinner_food, dinner_calorie } = e.target;
			const MealsAndCalories = {
				BreakFast: {
					breakfast_food: breakfast_food.value,
					breakfast_calorie: breakfast_calorie.value
				},
				Lunch: {
					lunch_food: lunch_food.value,
					lunch_calorie: lunch_calorie.value
				},
				Dinner: {
					dinner_food: dinner_food.value,
					dinner_calorie: dinner_calorie.value
				}
			};

			renderCalorieForm(food, calorie); {
				const { meal } = this.state
				return (
					<div className='meal_entries'>
						<input className="meal__box" type='text' placeholder={food} name={food}
							value={meal[`${food}`]} onChange={this.onChange} /><br></br>
						<input className="meal__box" type='number' placeholder={calorie} name={calorie}
							value={meal[`${calorie}`]} onChange={this.onChange} />
					</div>
				)
			}
		}
	}

	render() {
		const breakfast = this.renderCalorieForm('What was for breakfast?', 'Breakfast calories?')
		const lunch = this.renderCalorieForm('What was for lunch?', 'Lunch calories?')
		const dinner = this.renderCalorieForm('What was for dinner?', 'Dinner calories?')
		const { error } = this.state

		return (
			<form className="user__carb-form" onSubmit={this.getMealsAndCalories}>
				<p className="meal__header">
					B R E A K F A S T
				{breakfast}
				</p>

				<p className="meal__header">
					L U N C H
				{lunch}</p>

				<p className="meal__header">
					D I N N E R
				{dinner}</p>

				<div className="meal_control">
					<button className="meal__button" type="button" onClick={this.props.onAddMealSuccess}>RESET</button>
					<button className="meal__button" type="submit">SUBMIT</button>
				</div>
				{error && <div className='user__carb-form-error'>{error}</div>}
			</form>
		)
	}
}
