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
					<NavLink text="Projeto completo em formato PDF (abre em uma nova guia)" href="projeto_de_pesquisa_acessibilidade_digital.pdf" target="_blank"/>
					<NavLink text="Wireframe do projeto em formato PDF (abre em uma nova guia)" href="wireframe_do_projeto_sobre_acessibilidade_digital.pdf" target="_blank"/>
				</List>
			</nav>
		</Box>
	);
}
export default Navigation;