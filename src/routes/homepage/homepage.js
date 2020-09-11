import React from 'react';
import Calender from '../../component/calender/calender'
import './homepage-style.css'
export default class homePage extends React.Component{
<<<<<<< HEAD
    render(){
        return(

        <div> 
        </div>
        )
=======

    state={
        date:new Date()
>>>>>>> 954ba794b2c71fc65a45fcbe640c8286fe42ce81
    }
    render(){
        return(

            <div> 
            <Calender/>
            </div>
        
        )
}
}