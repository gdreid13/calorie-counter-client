import React from 'react';

export default class mealInputform extends React.Component {
    static defaultProps = {
        history: {
            push: () => { },
        }
    }

    render() {
        return (
            <section className="meal_entry">
                <form class='user__carb-form'>
                    <div>
                        <label for="breakfast_food">Breakfast</label>
                        <input placeholder='Meal' type="text" name='breakfast_food' id='breakfast_food' />
                        <label for="breakfast_calorie">Calories</label>
                        <input placeholder='Calories' type="text" name='breakfast_calorie' id='breakfast_calorie' />
                        <button type='submit'>Log</button>
                    </div>
                    <div>
                        <label for="lunch_food">Lunch</label>
                        <input placeholder='Meal' type="text" name='lunch_food' id='lunch_food' />
                        <label for="lunch_calorie">Calories</label>
                        <input placeholder='Calories' type="text" name='lunch_calorie' id='lunch_calorie' />
                        <button type='submit'>Log</button>
                    </div>
                    <div>
                        <label for="dinner_food">Dinner</label>
                        <input placeholder='Meal' type="text" name='dinner_food' id='dinner_food' />
                        <label for="dinner_calorie">Calories</label>
                        <input placeholder='Calories' type="text" name='dinner_calorie' id='dinner_calorie' />
                        <button type='submit'>Log</button>
                    </div>
                </form>
            </section>
        )
    }
}