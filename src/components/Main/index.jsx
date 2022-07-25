import styles from "./styles.module.css";
import Text from './Text'
import Feedback from "./Typing/Feedback"
import React from "react";
// import { useEffect, useRef, useState } from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState,useEffect,useRef } from "react";

import Alert from './Alert'
import Typing from "./Typing/Typing";


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  
   


	return (
		<div className={styles.main_container} >
			<nav className={styles.navbar}>
				<h1>Typing Utilies</h1>
				
				
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
      
	  <Typing />

	  
	  
      
	
			
      
			
		</div>
	);
};

export default Main;
