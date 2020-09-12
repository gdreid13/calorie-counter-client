import React from 'react';
import Calender from '../../component/calendar/calendar'
import './homepage-style.css'

export default class homePage extends React.Component{

    state={
        date:new Date()
    }
    render(){
        return(

            <div> 
            <Calender/>
            </div>
        
        )
}

}