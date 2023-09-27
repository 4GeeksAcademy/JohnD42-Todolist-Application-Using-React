import React from "react";
import { useState, useRef } from 'react'
//include images into your bundle
import Input from '../component/Input.jsx'
import ToDo from '../component/ToDo.jsx'
import Footer from '../component/Footer.jsx'

//create your first component
const Home = () => {
	const [input, setInput] = useState('')
	const [toDos, setToDos] = useState([])
	const nextKey = useRef(0)

	const addToDo = (e) => {
		if(e.key === 'Enter') {
			if(input !== '') {
				setToDos(toDos.concat([input]))
				setInput('')
				nextKey.current = nextKey.current + 1
			}
		}
	}

	const deleteToDo = (e) => {
		setToDos(toDos.filter(item => {
			if (`${item}<i class="fa-solid fa-x"></i>` !== e.target.parentNode.innerHTML) {
			return item
		}
		}))
		nextKey.current = nextKey.current - 1
	}

	return (
		<div className="text-center">
			<h1 className="display-1">todos</h1>
			<div className="row">
				<div className="bordered col-2 mx-auto g-0 list">
					<Input input={input} setInput={setInput} addToDo={addToDo}/>
					<ul>
						{toDos.map((value) => <ToDo value={value} deleteToDo={deleteToDo}/>)}
						<Footer toDos={toDos}/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
