import {useState} from "react";
import Navigation from "./components/navigation";
import Content from "./components/content";
import './App.css';

const App=(props)=> {
	const sections=[
		"tema",
		"problema",
"justificativa",
	]
	return (
		<div>
			<header>
			<Navigation sections={sections}/>
			</header>
			<main>
				<Content/>
			</main>
		</div>
	);
}

export default App;
