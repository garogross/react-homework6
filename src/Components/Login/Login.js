import React from 'react'
import Button from '../Button/Button'
import classes from "./Login.module.css"
import { useState, useEffect } from 'react';

const Login = (props) => {
 const [enteredEmail, setEnteredEmail] = useState("")
 const [enteredPassword, SetEnteredPassword] = useState("")
 const [formIsValid,SetFormIsValid] = useState(false)
 const [emailIsValid, setEmailIsValid] = useState(true);
 const [passwordIsValid, setPasswordIsValid] = useState(true);


 const emailValid = enteredEmail.includes("@mail")
 const passwordValid = enteredPassword.length >= 6
 useEffect(() => {
  SetFormIsValid(emailValid && passwordValid)
 },[enteredEmail,enteredPassword])

 const emailChangeHandler = e => {
  setEnteredEmail(e.target.value)
 }
 const passwordChangeHandler = e => {
  SetEnteredPassword(e.target.value)
 }

 const validateEmailHandler = () => {
  setEmailIsValid(enteredEmail.includes('@'));
 };

 const validatePasswordHandler = () => {
  setPasswordIsValid(enteredPassword.trim().length > 6);
 };
 const formSubmitHandler = e => {
  e.preventDefault()
  props.onLogin(enteredEmail, enteredPassword, formIsValid)
 }
 return (
  <form onSubmit={formSubmitHandler} className={classes.form}>
   <label htmlFor="email">Email</label>
   <input
    type="email"
    id="email"
    onChange={emailChangeHandler}
    className={!emailIsValid ? classes.invalid : ""}
    onBlur={validateEmailHandler}
    />
   <label htmlFor="password">Password</label>
   <input
    type="password"
    id="password"
    onChange={passwordChangeHandler}
    onBlur={validatePasswordHandler}

    className={!passwordIsValid ? classes.invalid : ""}
    
    />
   <Button type="submit">Login</Button>
   
  </form>
 )
}

export default Login
