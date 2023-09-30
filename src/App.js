import Navigation from "./components/navigation";
import Content from "./components/content";
import './App.css';

const App=(props)=> {
	return (
		<div>
			<header>
				<h1 id="top">Diminuição da acessibilidade em sites e apps: por quê?</h1>
<p>Por Gabriel Haberkamp</p>
			<Navigation/>
			</header>
			<main>
				<Content/>
			</main>
		</div>
	);
}

export default App;
