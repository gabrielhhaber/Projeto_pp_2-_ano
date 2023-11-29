import Box from "@mui/material/Box";
import List from "@mui/material/List";
	import NavLink from "../nav_link";

const Navigation=(props)=> {
	return (
		<Box sx={{width: "50%", maxWidth: 250}}>
			<nav>
				<List>
					<NavLink id="tema" text="Tema" href="#tema"/>
					<NavLink id="resumo" text="Resumo" href="#resumo"/>
					<NavLink id="problema" text="Problema" href="#problema"/>
					<NavLink id="justificativa" text="Justificativa" href="#justificativa"/>
					<NavLink id="objetivos" text="Objetivos" href="#objetivos"/>
					<NavLink id="referencial-teorico-resumido" text="Referencial teórico resumido" href="#referencial-teorico-resumido"/>
					<NavLink id="metodologia" text="Metodologia" href="#metodologia"/>
					<NavLink id="conclusoes-parciais" text="Conclusões parciais" href="#conclusoes-parciais"/>
					<NavLink id="referencias-resumidas" text="Referências resumidas" href="#referencias-resumidas"/>
					<NavLink id="projeto-completo" text="Projeto completo em formato PDF (abre em uma nova guia)" href="projeto_de_pesquisa_acessibilidade_digital.pdf" target="_blank"/>
					<NavLink id="wireframe" text="Wireframe do projeto em formato PDF (abre em uma nova guia)" href="wireframe_do_projeto_sobre_acessibilidade_digital.pdf" target="_blank"/>
					<NavLink id="mockup" text="Mockup do projeto (incorporada à página)" href="#mockup-do-projeto"/>
				</List>
			</nav>
		</Box>
	);
}
export default Navigation;