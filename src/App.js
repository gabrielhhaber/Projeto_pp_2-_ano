import Navigation from "./components/navigation";
import Content from "./components/content";
import './App.css';

const App=(props)=> {
	return (
		<div>
			<header>
				<h1 id="top">Accessibling. Construindo uma web mais acessível e inclusiva</h1>
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
