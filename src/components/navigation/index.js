import {useState} from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const Navigation=(props)=> {
	const [anchorEl, setAnchorEl]=useState(null);
	const isOpen=Boolean(anchorEl);
	const handleButtonClick=(event)=> {
		setAnchorEl(event.currentTarget);
	}
	const onMenuClose=(event)=> {
		setAnchorEl(null);
	}
const onMenuClick=(event, index)=> {
alert("Opção "+index+" selecionada! "+props.sections[index]);
onMenuClose(event);
}
	return (
		<nav>
			<Button aria-controls="navigation-menu" aria-haspopup="true" aria-expanded={isOpen?true:false} onClick={handleButtonClick}>Navegação</Button>
			<Menu id="navigation-menu" anchorEl={anchorEl} open={isOpen} onClose={onMenuClose} keepMounted>
{props.sections.map((item, index)=> {
return (
<MenuItem onClick={(event)=>onMenuClick(event, index)}>{item}</MenuItem>
)
})};
			</Menu>
		</nav>
	);
}
export default Navigation;