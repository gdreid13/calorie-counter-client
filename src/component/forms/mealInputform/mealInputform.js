import React from 'react';
import { GeneralApiServices } from '../../../services/api-service';
// import LogButton from '../Button'

export default class mealInputform extends React.Component {
	static defaultProps = {
		history: {
			push: () => {}
		},
		userId: 1 // kludge to pass userId to this component, delete when fixed
	};

	state = {
		isLogged: true
	};

	onMealsSubmit() {
		console.log('Submit successful!');
	}

	getMealsAndCalories = (e) => {
		let userId = this.props.userId;
		e.preventDefault();
		const {
			breakfast_food,
			breakfast_calories,
			lunch_food,
			lunch_calories,
			dinner_food,
			dinner_calories
		} = e.target;
		const MealsAndCalories = {
			userid: userId,
			breakfast_food: breakfast_food.value,
			breakfast_calories: breakfast_calories.value,
			lunch_food: lunch_food.value,
			lunch_calories: lunch_calories.value,
			dinner_food: dinner_food.value,
			dinner_calories: dinner_calories.value,
			dateofmeal: this.props.selectedDate
		};

		GeneralApiServices.postItem(MealsAndCalories)
			.then((res) => {				
				this.onMealsSubmit();
			})
			.catch((res) => {
				this.setState({ error: res.error });
				alert(JSON.stringify(this.state.error));
			});
	};

	render() {
		let breakfast_calories = '';
		let breakfast_food = '';
		let lunch_calories = '';
		let lunch_food = '';
		let dinner_food = '';
		let dinner_calories = '';
		
		if (this.props.currentMealInfo.length > 0) {
			breakfast_calories = this.props.currentMealInfo[0].breakfast_calories;
			breakfast_food = this.props.currentMealInfo[0].breakfast_food;
			lunch_calories = this.props.currentMealInfo[0].lunch_calories;
			lunch_food = this.props.currentMealInfo[0].lunch_food;
			dinner_food = this.props.currentMealInfo[0].dinner_food;
			dinner_calories = this.props.currentMealInfo[0].dinner_calories;
		}
		console.log(breakfast_calories);
		return (
			<section className="meal_entry">
				<form className="user__carb-form" onSubmit={this.getMealsAndCalories}>
					<div>
						<label htmlFor="breakfast_food">Breakfast</label>
						<input
							placeholder="Meal"
							type="text"
							name="breakfast_food"
							id="breakfast_food"
							defaultValue={breakfast_food}
						/>
						<label htmlFor="breakfast_calories">Calories</label>
						<input
							placeholder="Calories"
							type="text"
							name="breakfast_calories"
							id="breakfast_calorie"
							defaultValue={breakfast_calories}
						/>
						<button type="submit">Log</button>
					</div>
					<div>
						<label htmlFor="lunch_food">Lunch</label>
						<input
							placeholder="Meal"
							type="text"
							name="lunch_food"
							id="lunch_food"
							defaultValue={lunch_food}
						/>
						<label htmlFor="lunch_calories">Calories</label>
						<input
							placeholder="Calories"
							type="text"
							name="lunch_calories"
							id="lunch_calorie"
							defaultValue={lunch_calories}
						/>
						<button type="submit">Log</button>
					</div>
					<div>
						<label htmlFor="dinner_food">Dinner</label>
						<input
							placeholder="Meal"
							type="text"
							name="dinner_food"
							id="dinner_food"
							defaultValue={dinner_food}
						/>
						<label htmlFor="dinner_calories">Calories</label>
						<input
							placeholder="Calories"
							type="text"
							name="dinner_calories"
							id="dinner_calorie"
							defaultValue={dinner_calories}
						/>
						<button type="submit">Log</button>
					</div>
				</form>
			</section>
		);
	}
}
