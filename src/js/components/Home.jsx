import React from "react";
import Digit from "./digit.jsx";

//create your first component
const Home = ({timer}) => {

//Convertimos un número a string y lo dividimos en digitos

	let digits = timer.toString().split("");

//Añadimos 0 a la izda. para tener 6 digitos siempre

	while (digits.length < 6) {
		digits.unshift("0");
	}

	return (
	  <div className= "counter-box bg-primary p-3 rounded d-inline-flex text-white"
	  style={{ height: "12rem" }}
		>
		<div className="d-flex flex-column justify-content-center m-auto">
		   <h1 className="text-center mb-3 ">Arrancamos!!!!</h1>
		   <div className="text-center d-flex gap-1">
		  	<Digit digit={<i className="fa-solid fa-clock clock-icon"></i>} />	
				{digits.map((d, i) => (
					<Digit key={i} digit={d} />
					))}	
		  </div>
		</div>
	  </div>	
	);
};

export default Home;