import React from 'react'
import Button from '../Button/Button';
import classes from "./Home.module.css"

const Home = (props) => {
 return (
  <div className={classes.container}>
   <h1>Wellcome</h1>
   <Button onClick={props.onLogout}>Log out</Button>
  </div>
 )
}

export default Home
