import {useState} from "react";
import Navigation from "./components/navigation";
import Content from "./components/content";
import './App.css';

const App=(props)=> {
	const sections=[
		"tema",
		"resumo",
		"problema",
		"justificativa",
		"objetivos",
		"referencial teórico",
		"metodologia",
"Conclusões parciais",
	]
	return (
		<div>
			<header>
				<h1 id="top">Diminuição da acessibilidade em sites e apps: por quê?</h1>
<p>Por Gabriel Haberkamp</p>
			<Navigation sections={sections}/>
			</header>
			<main>
				<Content/>
			</main>
		</div>
	);
}

export default App;
