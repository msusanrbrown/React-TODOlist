import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export function TODO(props) {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([
		"clean dishes",
		"walk dog",
		"grocery shopping"
	]);

	return (
		<div className="main">
			<div className="wbackground">
				<h1>todos</h1>
				<div className="todolist">
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyUp={e => {
							if (e.keyCode === 13 && input !== "") {
								setTodos([...todos, input]);
								setInput("");
							}
						}}
						placeholder={
							todos.length > 0
								? "Please add another task"
								: "No tasks, please add a new task"
						}
					/>
					<ul className="list">
						{todos.map((task, item) => {
							return (
								<li key={item}>
									{task}
									<button
										onClick={() => {
											const todos1 = todos.filter(
												(e, i) => {
													return i !== item;
												}
											);
											setTodos(todos1);
										}}>
										X
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
