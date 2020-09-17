/* eslint-disable */
import React from 'react'

export function validateName(name='') {
    const validLetters= /^[A-Za-z]+$/
    if(name.length===0 ) {
        return `Name is required`
    }
    if(name.length<3) {
        return `Name is too short`
    }
    if(!validLetters.test(name)) {
        return `Names must contain only valid letters`
    }
    
    return null
}

export function validatePassword(password='') {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
    if(password.length===0) {
        return 'Password is required'
    }
    if(password.length<8){
        return 'Password must be longer than 8 characters'
    }
    if(password.length>72){
        return 'Password must be shorter than 72 characters'
    }
    if(password.startsWith(' ')||password.endsWith(' ')){
        return 'Password must not start or end with empty spaces'
    }
    if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)){
        return 'Password must contain 1 upper case,lower case,number and special character'
    }
    return null

}

export function validateUsername(userList=[],username='') {
    //username= username.trim.toLocaleLowerCase()
    const usernameExists= userList.find(user=>user.user_name===username)
    if (username.length===0) return 'Username is required'
    if (usernameExists) return 'Username already exists'
    return null
}

export  function ValidationError(props) {
    if(props.message) {
      return <div className="error"><span>{props.message}</span></div>
    }
    return <></>
}

export function BiometricComponent(){
    return (
        <div className='form_input'>
            <header>Biometric:</header>
            <div className='biometric'>
                <input placeholder='Age' type="text" name='age' id='age' />
                <input placeholder='Height (in)' type="text" name='height' id='height' />
                <input placeholder='Weight (lbs)' type="text" name='weight' id='weight' />
            </div>
        </div>
    )
}

export function BiometricSelection(){
    const ageOptions=()=>{

    }
    const weightOption=()=>{

    }
    const heightOptions=()=>{

    }
    return (
        <div className='bio_select'>
            <h3>Biometric</h3>
            <div>
                <header>Gender</header>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <header>Age</header>
                <select>

                </select>
            </div>
            <div>
                <header>Weight</header>
                <select>

                </select>
            </div>
            <div>
                <header>Height</header>
                <select>

                </select>
            </div>
        </div>
    )
}




  
