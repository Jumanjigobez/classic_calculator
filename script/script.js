let answer = document.getElementById("input");

//For Calculations
insert = (num) => {
	answer.value += num;
}

Clear = () => {
	answer.value = answer.value.slice(0,-1);
}

reset = () => {
	answer.value = "";
}

calc = () => {
	try {

	   answer.value = eval(answer.value).toLocaleString();

	} catch (err) {
		answer.value = "MATH Error!";
	}
}

//For Theme changer It is a bit large but simple understanable by adding the styles
var styleElem = document.head.appendChild(document.createElement("style"));

let theme_btn1 = document.getElementById("1");
let theme_btn2 = document.getElementById("2");
let theme_btn3 = document.getElementById("3");

theme_1 = () =>{
	styleElem.innerHTML = `
		body{
			width: 100vw;
			height: 100vh;
			background-color: var(--Very-dark-desaturated-blue-bg);
			color: white;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;	
		}
		#menu_btn li:nth-child(1):after{
			content: "";
			width: 100%;
			height: 100%;
			background-color: var(--Red);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: 10%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn li:nth-child(2):after{
			content: "";
			width: 0;
			height: 0;
			background-color: var(--Orange);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: 5%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn li:nth-child(3):after{
			content: "";
			width: 0;
			height: 0;
			background-color: var(--Pure-cyan);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: -5%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn:after{
			content: "";
			width: 100%;
			height: 120%;
			background-color: var(--Very-dark-desaturated-blue-key-bg);
			border-radius: 20%;
			padding: 0rem 0.2rem;
			position: absolute;
			top: 100%;
			left: -10%;
			cursor: pointer;
			z-index: 900;
		}
		.input_area input{
			background-color: var(--Very-dark-desaturated-blue-screen-bg);
			border: none;
			outline: none;
			border-radius: 5px;
			color: white;
			padding: 2rem;
			font-size: 30px;
			text-align: right;
			word-wrap: wrap;
		}
		input::placeholder{
			color: white;
			font-size: 30px;
		}
		.buttons_area{
			background-color: var(--Very-dark-desaturated-blue-key-bg);
			padding: 1rem;
			display: grid;
			grid-template-columns: repeat(auto-fill,minmax(80px, 3fr));
			grid-gap: 1rem;
			position: relative;
			width: 100%;
			height: 100%;
		}
		.key{
			border: none;
			border-radius: 5px;
			background-color: var(--Light-grayish-orange);
			box-shadow: 0px 3px 1px var(--Grayish-orange);
			color: black;
			font-size: 32px;
			text-align: center;
			padding: 0.5rem; 
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
		.key:hover{
			background-color: white;

		}
		.del{
			background-color: var(--Desaturated-dark-blue-key-shadow);
			box-shadow: 0px 3px 1px var(--Desaturated-dark-blue-key-back);
			color: white;
			transition: 0.2s ease-in-out;
		}
		.del:hover{
			background-color: var(--Desaturated-dark-blue-key-back);
		}
		.reset{
			border: none;
			border-radius: 5px;
			font-size: 32px;
			text-align: center;
			min-width: 11rem;
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
		.equal{
			border: none;
			border-radius: 5px;
			font-size: 32px;
			text-align: center;
			background-color: var(--Dark-red);
			box-shadow: 0px 3px 1px var(--Red);
			color: white;
			min-width: 11.5rem;
			cursor: pointer;
			margin-left: 6rem;
			transition: 0.2s ease-in-out;
			transition: 0.2s ease-in-out;
		}
		.equal:hover{
			background-color: var(--Red);
		}
		@media (max-width: 375px){
			body{
				display: block;
				padding: 2rem 1rem;
			}
			.theme_btn h2{
			font-size: 10px;
			margin-top: 1.2rem;
			margin-right: 2rem;
			}
			#menu_btn{
			margin-left: 0rem;
			margin-right: 0rem;
			position: relative;
			}
			.input_area input{
				width: 100%;
			}
			.buttons_area{
				grid-template-columns: repeat(auto-fill,minmax(60px, 2fr));
			}
			.key{
				padding: 0.5rem 0.5rem;
			}
			.reset{
				font-size: 25px;
				text-align: center;
				min-width: 9rem;
			}
			.equal{
				font-size: 25px;
				text-align: center;
				color: white;
				min-width: 8.5rem;
				cursor: pointer;
				margin-left: 5rem;
				transition: 0.2s ease-in-out;
				transition: 0.2s ease-in-out;
			}
		}
		`;
}

theme_2 = () =>{
styleElem.innerHTML = `
		body{
			width: 100vw;
			height: 100vh;
			background-color: var(--Light-gray);
			color: black;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;	
		}
		#menu_btn li:nth-child(1):after{
			content: "";
			width: 0;
			height: 0;
			background-color: var(--Red);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: 10%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn li:nth-child(2):after{
			content: "";
			width: 100%;
			height: 100%;
			background-color: var(--Orange);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: 5%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn li:nth-child(3):after{
			content: "";
			width: 0;
			height: 0;
			background-color: var(--Pure-cyan);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: -5%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn:after{
			content: "";
			width: 100%;
			height: 120%;
			background-color: var(--Grayish-red);
			border-radius: 20%;
			padding: 0rem 0.2rem;
			position: absolute;
			top: 100%;
			left: -10%;
			cursor: pointer;
			z-index: 900;
		}
		.input_area input{
			background-color: var(--Very-light-gray);
			border: none;
			outline: none;
			border-radius: 5px;
			color: black;
			padding: 2rem;
			font-size: 30px;
			text-align: right;
			word-wrap: wrap;
		}
		input::placeholder{
			color: black;
			font-size: 30px;
		}

		.buttons_area{
			background-color: var(--Grayish-red);
			padding: 1rem;
			display: grid;
			grid-template-columns: repeat(auto-fill,minmax(80px, 3fr));
			grid-gap: 1rem;
			position: relative;
			width: 100%;
			height: 100%;
		}
		.key{
			border: none;
			border-radius: 5px;
			background-color: var(--Light-grayish-orange);
			box-shadow: 0px 3px 1px var(--Dark-grayish-orange);
			color: black;
			font-size: 32px;
			text-align: center;
			padding: 0.5rem; 
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
		.key:hover{
			background-color: white;

		}
		.del{
			background-color: var(--Dark-moderate-cyan);
			box-shadow: 0px 3px 1px var(--Very-dark-cyan);
			color: white;
			transition: 0.2s ease-in-out;
		}
		.del:hover{
			background-color: var(--Very-dark-cyan);
		}
		.reset{
			border: none;
			border-radius: 5px;
			font-size: 32px;
			text-align: center;
			min-width: 11rem;
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
		.equal{
			border: none;
			border-radius: 5px;
			font-size: 32px;
			text-align: center;
			background-color: var(--Orange);
			box-shadow: 0px 3px 1px var(--Dark-orange);
			color: white;
			min-width: 11.5rem;
			cursor: pointer;
			margin-left: 6rem;
			transition: 0.2s ease-in-out;
			transition: 0.2s ease-in-out;
		}
		.equal:hover{
			background-color: var(--Dark-orange);
		}
		@media (max-width: 375px){
			body{
				display: block;
				padding: 2rem 1rem;
			}
			.theme_btn h2{
			font-size: 10px;
			margin-top: 1.2rem;
			margin-right: 2rem;
			}
			#menu_btn{
			margin-left: 0rem;
			margin-right: 0rem;
			position: relative;
			}
			.input_area input{
				width: 100%;
			}
			.buttons_area{
				grid-template-columns: repeat(auto-fill,minmax(60px, 1fr));
			}
			.key{
				padding: 0.5rem 0.5rem;
			}
			.reset{
				font-size: 25px;
				text-align: center;
				min-width: 9rem;
			}
			.equal{
				font-size: 25px;
				text-align: center;
				color: white;
				min-width: 8.5rem;
				cursor: pointer;
				margin-left: 5rem;
				transition: 0.2s ease-in-out;
				transition: 0.2s ease-in-out;
			}
		}
		`;
}

theme_3 = () =>{
	styleElem.innerHTML = `
		body{
			width: 100vw;
			height: 100vh;
			background-color: var(--Very-dark-violet-bg);
			color: var(--Light-yellow);
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center;	
		}
		#menu_btn li:nth-child(1):after{
			content: "";
			width: 0;
			height: 0;
			background-color: var(--Red);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: 10%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn li:nth-child(2):after{
			content: "";
			width: 0;
			height: 0;
			background-color: var(--Orange);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: 5%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn li:nth-child(3):after{
			content: "";
			width: 100%;
			height: 100%;
			background-color: var(--Pure-cyan);
			border-radius: 50%;
			position: absolute;
			top: 120%;
			left: -5%;
			cursor: pointer;
			z-index: 10000;
		}
		#menu_btn:after{
			content: "";
			width: 100%;
			height: 120%;
			background-color: var(--Very-dark-violet);
			border-radius: 20%;
			padding: 0rem 0.2rem;
			position: absolute;
			top: 100%;
			left: -10%;
			cursor: pointer;
			z-index: 900;
		}
		.input_area input{
			background-color: var(--Very-dark-violet);
			border: none;
			outline: none;
			border-radius: 5px;
			color: var(--Light-yellow);
			padding: 2rem;
			font-size: 30px;
			text-align: right;
			word-wrap: wrap;
		}
		input::placeholder{
			color: var(--Light-yellow);
			font-size: 30px;
		}
		.buttons_area{
			background-color: var(--Very-dark-violet);
			padding: 1rem;
			display: grid;
			grid-template-columns: repeat(auto-fill,minmax(80px, 1fr));
			grid-gap: 1rem;
			position: relative;
			width: 100%;
			height: 100%;
		}
		.key{
			border: none;
			border-radius: 5px;
			background-color: var(--Very-dark-violet-key-bg);
			box-shadow: 0px 3px 1px var(--Dark-magenta);
			color: var(--Light-yellow);
			font-size: 32px;
			text-align: center;
			padding: 0.5rem; 
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
		.key:hover{
			background-color: var(--Dark-violet);

		}
		.del{
			background-color: var(--Dark-violet);
			box-shadow: 0px 3px 1px var(--Vivid-magenta);
			color: white;
			transition: 0.2s ease-in-out;
		}
		.del:hover{
			background-color: var(--Vivid-magenta);
		}
		.reset{
			border: none;
			border-radius: 5px;
			font-size: 32px;
			text-align: center;
			min-width: 11rem;
			cursor: pointer;
			transition: 0.2s ease-in-out;
		}
		.equal{
			border: none;
			border-radius: 5px;
			font-size: 32px;
			text-align: center;
			background-color: var(--Pure-cyan);
			box-shadow: 0px 3px 1px var(--Soft-cyan);
			color: black;
			min-width: 11.5rem;
			cursor: pointer;
			margin-left: 6rem;
			transition: 0.2s ease-in-out;
			transition: 0.2s ease-in-out;
		}
		.equal:hover{
			background-color: var(--Soft-cyan);
		}
		@media (max-width: 375px){
			body{
				display: block;
				padding: 2rem 1rem;
			}
			.theme_btn h2{
			font-size: 10px;
			margin-top: 1.2rem;
			margin-right: 2rem;
			}
			#menu_btn{
			margin-left: 0rem;
			margin-right: 0rem;
			position: relative;
			}
			.input_area input{
				width: 100%;
			}
			.buttons_area{
				grid-template-columns: repeat(auto-fill,minmax(60px, 1fr));
			}
			.key{
				padding: 0.5rem 0.5rem;
			}
			.reset{
				font-size: 25px;
				text-align: center;
				min-width: 9rem;
			}
			.equal{
				font-size: 25px;
				text-align: center;
				color: white;
				min-width: 8.5rem;
				cursor: pointer;
				margin-left: 5rem;
				transition: 0.2s ease-in-out;
				transition: 0.2s ease-in-out;
			}
		}
		`;
}


