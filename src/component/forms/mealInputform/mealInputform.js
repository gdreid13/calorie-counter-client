import React from 'react'
import { GeneralApiServices } from '../../../services/api-service'
import moment from 'moment';
import './mealInputform-style.css'
// import LogButton from '../Button'

export default class mealInputform extends React.Component {
	static defaultProps = {
		history: {
			push: () => { },
			selectedDate: new Date()
		},
	};

	state = {
		isLogged: true,
		meal:{
			id:'',
			breakfast_food:'',
			breakfast_calories:0,
			lunch_food:'',
			lunch_calories:0,
			dinner_food:'',
			dinner_calories:0,	
		},
		displayMessage: false,
	}

	componentDidMount(){
		//const {userId,selectedDate} = this.props
		//get meal by user and date
	}

	onMealsSubmit(e) {
		e.preventDefault();
		const { breakfast_food,breakfast_calories,lunch_food,lunch_calories,dinner_food,dinner_calories } = e.target;
		const mealData={
			breakfast_food: breakfast_food.value,
			breakfast_calories: breakfast_calories.value,
			lunch_food: lunch_food.value,
			lunch_calories: lunch_calories.value,
			dinner_food: dinner_food.value,
			dinner_calories: dinner_calories.value,
		}
		const {id}= this.state.meal
		const {userId,selectedDate} = this.props
		const date= moment(selectedDate).format('YYYY-MM-DD')
		
		if (id){
			GeneralApiServices.patchItemById('meals',id,mealData)
				.then(meal => {
					

				}).catch(res => console.log(res.message))
		}
		else {
			mealData.userId= userId
			mealData.dateofmeal= date;
			GeneralApiServices.postItem('meals',mealData)
				.then(meal => {
					this.props.onAddMealSuccess()

				}).catch(res => console.log(res.message))
		}
	}

	getMealsAndCalories = (e) => {
		e.preventDefault();
		/*
		const {
			breakfast_food,
			breakfast_calories,
			lunch_food,
			lunch_calories,
			dinner_food,
			dinner_calories } = e.target;
		const MealsAndCalories = {
			userid: userId,
			dateofmeal: date,
			breakfast_food: breakfast_food.value,
			breakfast_calories: breakfast_calories.value,
			lunch_food: lunch_food.value,
			lunch_calories: lunch_calories.value,
			dinner_food: dinner_food.value,
			dinner_calories: dinner_calories.value,
		}
		console.log(MealsAndCalories)*/
		/*
		GeneralApiServices.postItem('meals', MealsAndCalories)
			.then((res) => {
				this.onMealsSubmit();
			})
			.catch((res) => {
				this.setState({ error: res.error });
				alert(JSON.stringify(this.state.error));
			});
		*/
	}

	onChange= e=>{
		const {name,value}= e.target
		//this.setState({[key]:newValue})
		this.setState({meal:{...this.state.meal,[name]:value}})
    }

	renderCalorieForm(food,calorie){
		const {meal}=this.state
		return (
			<div className='meal_entries'>
				<input type='text'  placeholder={food} name={food} value={meal.food} onChange={this.onChange}/>
				<input type='number'placeholder={calorie} name={calorie} value={meal.calorie} onChange={this.onChange}/>
			</div>
		)
	}

	render(){
		const breakfast= this.renderCalorieForm('breakfast_food','breakfast_calories')
		const lunch= this.renderCalorieForm('lunch_food','lunch_calories')
		const dinner= this.renderCalorieForm('dinner_food','dinner_calories')

		return(
			<form className="user__carb-form" onSubmit={this.onMealsSubmit}>
				{breakfast}
				{lunch}
				{dinner}
				<div className="form_control">
					<button type="button">Reset</button>
					<button type="submit">Submit</button>
				</div>
			</form>
		)
	}

	/*
	render() {
		return (
			<section className="meal_entry">
				<form className="user__carb-form" onSubmit={this.getMealsAndCalories}>
					<div>
						<label htmlFor="breakfast_food">Breakfast</label>
						<input placeholder="Meal" type="text" name="breakfast_food" id="breakfast_food" />
						<label htmlFor="breakfast_calories">Calories</label>
						<input placeholder="Calories" type="text" name="breakfast_calories" id="breakfast_calorie" />
						<button type="submit">Log</button>
					</div>
					<div>
						<label htmlFor="lunch_food">Lunch</label>
						<input placeholder="Meal" type="text" name="lunch_food" id="lunch_food" />
						<label htmlFor="lunch_calories">Calories</label>
						<input placeholder="Calories" type="text" name="lunch_calories" id="lunch_calorie" />
						<button type="submit">Log</button>
					</div>
					<div>
						<label htmlFor="dinner_food">Dinner</label>
						<input placeholder="Meal" type="text" name="dinner_food" id="dinner_food" />
						<label htmlFor="dinner_calories">Calories</label>
						<input placeholder="Calories" type="text" name="dinner_calories" id="dinner_calorie" />
						<button type="submit">Log</button>
					</div>
				</form>
			</section>
		);
	}*/
}

