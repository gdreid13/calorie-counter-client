import React from 'react';
// import LogButton from '../Button'

export default class mealInputform extends React.Component {
	static defaultProps = {
		history: {
			push: () => { }
		},
	};
	state = {
		isLogged: true,
	}

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
			}


			console.log(MealsAndCalories)
		}

		render() {
			return (
				<section className="meal_entry">
					<form className="user__carb-form" onSubmit={this.getMealsAndCalories}>
						<div>
							<label htmlFor="breakfast_food">Breakfast</label>
							<input placeholder="Meal" type="text" name="breakfast_food" id="breakfast_food" />
							<label htmlFor="breakfast_calorie">Calories</label>
							<input placeholder="Calories" type="text" name="breakfast_calorie" id="breakfast_calorie" />
							<button type="submit">Log</button>
						</div>
						<div>
							<label htmlFor="lunch_food">Lunch</label>
							<input placeholder="Meal" type="text" name="lunch_food" id="lunch_food" />
							<label htmlFor="lunch_calorie">Calories</label>
							<input placeholder="Calories" type="text" name="lunch_calorie" id="lunch_calorie" />
							<button type="submit">Log</button>
						</div>
						<div>
							<label htmlFor="dinner_food">Dinner</label>
							<input placeholder="Meal" type="text" name="dinner_food" id="dinner_food" />
							<label htmlFor="dinner_calorie">Calories</label>
							<input placeholder="Calories" type="text" name="dinner_calorie" id="dinner_calorie" />
							<button type="submit">Log</button>
						</div>
					</form>
				</section>
			);
		}
	}

