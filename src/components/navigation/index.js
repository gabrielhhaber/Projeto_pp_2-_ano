import Box from "@mui/material/Box";
import List from "@mui/material/List";
	import NavLink from "../nav_link";

const Navigation=(props)=> {
	return (
		<Box sx={{width: "50%", maxWidth: 250}}>
			<nav>
				<List>
					<NavLink text="Tema" href="#tema"/>
					<NavLink text="Resumo" href="#resumo"/>
					<NavLink text="Problema" href="#problema"/>
					<NavLink text="Justificativa" href="#justificativa"/>
					<NavLink text="Objetivos" href="#objetivos"/>
					<NavLink text="Referencial teórico resumido" href="#referencial-teorico-resumido"/>
					<NavLink text="Metodologia" href="#metodologia"/>
					<NavLink text="Conclusões parciais" href="#conclusoes-parciais"/>
					<NavLink text="Referências resumidas" href="#referencias-resumidas"/>
					<NavLink text="Projeto completo em formato Word (abre em uma nova guia)" href="https://senacrsedu-my.sharepoint.com/:w:/g/personal/04122736080_senacrs_edu_br/EeWgSwG-6HhMtJzH_bHa1mwBLvd5OU9mMR5ADm15j6Ujsg?e=IuDYkR" target="_blank"/>
				</List>
			</nav>
		</Box>
	);
}
export default Navigation;