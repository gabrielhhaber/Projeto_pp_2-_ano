import {useState} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navigation=(props)=> {
	return (
		<Box sx={{width: "50%", maxWidth: 250}}>
			<nav>
				<List>
					{props.sections.map((item, index)=> {
						const headingId="#"+item;
						let accesskey;
						if(item.includes(" ")) {
							const itemWords=item.split(" ");
							const secondWord=itemWords[1];
							accesskey=secondWord[0];
						}
						else {
							accesskey=item[0];
						}
						return (
							<ListItem>
									<ListItemButton component="a" href={headingId} accesskey={accesskey}>
									<ListItemText>
									{item}
									<span className="link-shortcut-key" aria-hidden="true"> (alt+{accesskey})</span>
								</ListItemText>
								</ListItemButton>
							</ListItem>
						);
					})}
					<ListItem>
						<ListItemButton component="a" href="/Referencias.html" accesskey="n" target="_blank">
							<ListItemText>
								Referências (abre em uma nova guia)
								<span className="link-shortcut-key" aria-hidden="true"> (Alt+n)</span>
							</ListItemText>
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}
export default Navigation;