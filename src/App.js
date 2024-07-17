import Navigation from "./components/navigation";
import Content from "./components/content";
import './App.css';

const App=(props)=> {
	return (
		<div>
			<header>
				<h1 id="top">ACCESSIBLING: dando voz à acessibilidade digital.</h1>
<p className="author">Por Gabriel Haberkamp</p>
			<Navigation/>
			</header>
			<main>
				<Content/>
			</main>
		</div>
	);
}

export default App;
