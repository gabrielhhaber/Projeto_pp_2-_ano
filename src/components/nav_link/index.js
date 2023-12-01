import {useEffect} from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const NavLink=(props)=> {
	const {id, text, href}=props;
	const target=props.target?props.target:"_self";
		const shortcutKeys={
		"tema": "t",
		"resumo": "r",
		"problema": "p",
		"justificativa": "j",
		"objetivos": "o",
		"referencial-teorico-resumido": "i",
		"metodologia": "m",
		"conclusoes-parciais": "c",
		"referencias-resumidas": "n",
		"projeto-completo": "f",
		"wireframe": "w",
		"mockup": "k"
	}
	const shortcutKey=shortcutKeys[id];
	useEffect(()=> {
		const onKeyDown=function(evt) {
			if(evt.altKey&&(evt.key===shortcutKey)) {
				evt.preventDefault();
				const linkElements=Array.from(document.getElementsByTagName("a"));
				const keyNames=[];
				for(let property in shortcutKeys) {
					keyNames.push(shortcutKeys[property]);
				}
				const linkIndex=keyNames.indexOf(shortcutKey);
				const sectionLink=linkElements[linkIndex];
				sectionLink.click();
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return ()=> {
			document.removeEventListener("keydown", onKeyDown);
		};
	});
	return (
		<ListItem>
			<ListItemButton component="a" href={href} target={target}>
				<ListItemText>
					{text}
					<span className="link-shortcut-key visually-hidden">(alt+{shortcutKey})</span>
				</ListItemText>
			</ListItemButton>
		</ListItem>
	);
};
export default NavLink;