import Section from "../section";
import "./content.css";
const Content=(props)=> {
	return (
		<div>
			<Section title="Tema">
				<p>Acessibilidade digital em sites e apps.</p>
			</Section>
			<Section title="Resumo">
				<p>O principal objetivo deste projeto de pesquisa é analisar os fatores por trás da diminuição da acessibilidade de sites e aplicativos na internet, buscando formas de interromper essa queda e conscientizar as empresas sobre a importância desse tema, promovendo uma web mais diversificada e inclusiva.</p>
				<p>O projeto analisou diversos fatores históricos relacionados ao 
				funcionamento da web, comparando a forma em que os sites eram desenvolvidos antigamente com as tendências e tecnologias do momento. Também foram consideradas diversas mudanças no setor de tecnologia nos últimos anos, como a ascensão dos smartphones, a popularização da inteligência artificial, o desenvolvimento de ferramentas automatizadas para a criação de sites, a falta de investimento em acessibilidade por parte das empresas, entre outros. Também foram investigados os principais motivos que levam as empresas a não investir em acessibilidade digital, como a falta de resultados significativos a curto prazo, a falta de conhecimento sobre o tema, entre outros.</p>
				<p>Como forma de tentar diminuir o impacto e dimensão dos problemas encontrados na pesquisa, foi criada a ideia de um portal de avaliação da acessibilidade de diversos sites e apps distintos, com o objetivo de premiar empresas que apresentem interesse e comprometimento na área, além de fornecer uma maneira fácil para que os usuários encontrem plataformas adequadas ao seu uso. O objetivo é incentivar empresas a realizar esforços na área, além de reconhecer esforços que já estão sendo realizados.</p>
			</Section>
			<Section title="Problema">
				<p>Por que a acessibilidade digital tem diminuído em muitas plataformas e como isso pode ser revertido?</p>
			</Section>
			<Section title="Justificativa">
				<p>A primeira pergunta que fiz a mim mesmo ao iniciar este projeto foi: por que pesquisar sobre a diminuição da acessibilidade digital em sites e apps?</p>
				<p>Como sou um usuário de tecnologia com deficiência visual, o tema acessibilidade digital é de grande importância para mim, pois ela é necessária para que eu possa usufruir das plataformas que utilizo diariamente. Como eu notei essa diminuição de acessibilidade em vários sites e aplicativos que utilizo, é de meu interesse entender as causas desta diminuição e, claro, que algo possa ser feito para superar este problema.</p>
				<p>Além disso, estou estudando desenvolvimento web e me aprofundei bastante na área de acessibilidade, e percebi que a maioria dos sites não está seguindo as práticas recomendadas pela W3C (a comunidade internacional responsável por manter o HTML e outras tecnologias web).</p>
				<p>Acredito que tratar deste tema também é de grande importância para toda a sociedade, pois precisamos conscientizar as empresas sobre esse grupo de usuários e tornar a web mais acessível. De acordo com um relatório mundial feito pela ONU, mais de 1 bilhão de pessoas vivem com algum tipo de deficiência.</p>
				<p>Mesmo que um determinado site não seja totalmente inacessível e só tenha problemas em algumas partes, praticamente todos os usuários deficientes são prejudicados por pequenas mudanças que as empresas fazem sem pensar em todos os públicos. A falta de acessibilidade está nos mínimos detalhes, nas pequenas alterações.</p>
				<p>E mesmo que o número de pessoas afetadas por um problema seja pequeno, é importante pensar em todos os usuários e na experiência que eles terão com o seu site / aplicativo.</p>
			</Section>
			<Section title="Objetivos">
				<h3>Objetivo geral</h3>
				<p>entender os principais motivos da diminuição da acessibilidade em sites e apps e como revertê-la.</p>
				<h3>Objetivos específicos</h3>
				<ol>
					<li>Pesquisar mais sobre o funcionamento das principais ferramentas usadas na criação de sites (Bootstrap, Wordpress, React JS, Angular, entre outras) e verificar se seguem os critérios/padrões adequados.</li>
					<li>Conscientizar as empresas sobre a necessidade de se criar um site inclusivo e que permita igual acesso a todos.</li>
					<li>Criar um portal em que serão feitas avaliações de vários sites e apps quanto à acessibilidade, por uma equipe especializada.</li>
					<li>Incentivar o uso de sites/apps acessíveis em diversos espaços, como escolas e locais de trabalho, por meio das avaliações do portal. Exemplo: um professor deseja fazer um quis em uma de suas aulas para entreter e divertir os alunos, mas não sabe ao certo qual plataforma utilizar. Ele tem um aluno com deficiência motora que deve poder participar, então ele entra na categoria quis do portal e verifica a avaliação dos sites apresentados. Se a avaliação estiver baixa, ele pensa: “Opa, é melhor não usar esse site aqui.”. Se a avaliação estiver com alta porcentagem, o professor saberá que se trata de uma plataforma inclusiva e a utilizará normalmente.</li>
					<li>Utilizar o site para que as empresas interessadas possam melhorar seus sites e saber o que é ideal para seus usuários. Uma avaliação um pouco baixa não significa que a empresa não se preocupa com o tema, mas alguns pontos podem passar despercebidos durante o desenvolvimento.</li>
					<li>Valorizar o esforço e dedicação de empresas que se preocupam com a acessibilidade de alguma forma, como com uma premiação para os desenvolvedores com maiores porcentagens. Nem todas as empresas se preocupam com isso, e é importante reconhecer quem está se esforçando em tornar sua plataforma inclusiva.</li>
				</ol>
			</Section>
			<Section title="Referencial teórico resumido">
				<p>Este referencial teórico não possui todas as pesquisas realizadas ao longo deste projeto. Para ler o referencial teórico completo, <a href="projeto_de_pesquisa_acessibilidade_digital.pdf" target="_blank">Acesse o documento com o projeto completo (abre em uma nova guia)</a>.</p>
				<p>   Buscando concluir os objetivos de pesquisa para compreender da melhor maneira o tema geral da mesma visando organizá-la, foram realizadas diversas pesquisas sobre diferentes assuntos que a englobam, como o real significado de acessibilidade digital, qual a sua importância para a sociedade e o que já foi feito sobre o tema.</p>
				<h3>O que é acessibilidade digital?</h3>
					<p>Na verdade, não existe uma definição totalmente precisa ou completa em relação ao termo “acessibilidade digital”. No entanto, podemos unir várias citações já existentes, e tentar formar uma definição mais clara.</p>
					<p>Segundo o site oficial do governo federal brasileiro (Brasil, 200?): “Acessibilidade Digital é a eliminação de barreiras na Web. O conceito pressupõe que os sites e portais sejam projetados de modo que todas as pessoas possam perceber, entender, navegar e interagir de maneira efetiva com as páginas.”</p>
					<p>“Páginas acessíveis são mais facilmente indexadas por mecanismos de busca, são compatíveis com uma maior variedade de aplicativos, além de serem mais fáceis e rápidas para navegar, beneficiando, assim, a todas as pessoas, incluindo pessoas idosas, sem habilidade para usar a internet, que utilizam dispositivos móveis etc.”</p>
					<p>E, de acordo com a Universidade de Oregon, nos Estados Unidos (UO, 200?).</p>
					<p>(Em tradução livre: “Acessibilidade digital é a prática e a mentalidade de projetar tecnologias utilizáveis pelo maior público possível. À medida que a tecnologia se torna cada vez mais arraigada em nossas vidas diárias, é de suma importância que implementemos tecnologias que apoiem a missão da universidade de promover a igualdade e a diversidade.”)</p>
				<p>Unindo as duas definições, podemos concluir que a acessibilidade digital é uma prática que se destina a permitir acesso igualitário entre todas as pessoas, independente das suas limitações e em qualquer tipo de tecnologia, como sites, aplicativos, ferramentas digitais e até mesmo equipamentos físicos. Embora a acessibilidade digital foque principalmente nas pessoas com deficiência, ela também se aplica a pessoas idosas ou com outros tipos de dificuldade, ou mesmo uma dificuldade temporária (.</p>
				<h3>Por que esse tema precisa receber mais atenção?</h3>
				<p>Uma pesquisa conduzida pela Big Data Corp e pelo Movimento Web para Todos (MWPT), durante 2022, avaliou 21 milhões de sites ativos no Brasil. Deles, apenas 0,46% tiveram sucesso em todos os critérios avaliados. Isso mostra uma diminuição de 0,43% em relação à edição anterior, realizada em 2021, em que o número de sites acessíveis havia aumentado.</p>
 <p>De acordo com a MWPT (2022), isso se deve principalmente ao crescimento de sites ativos, sobretudo os pequenos, nos quais a preocupação com a acessibilidade pode ser menor. O CEO da BigDataCorp, Thoran Rodrigues (Big Data Corp, 2022), afirma que, conforme aumenta a complexidade dos sites e da navegação, a tendência de testes falharem fica cada vez maior.</p>
				<h3>Quais acontecimentos estão influenciando a acessibilidade digital e de que formas?</h3>
				<h4>Mudanças na web</h4>
				<p>Em geral, nos primeiros anos de existência da web (quando as páginas ainda eram mais limitadas em seu tipo de conteúdo), era improvável que algum site não tivesse acessibilidade digital. O conteúdo deles era basicamente textual, e o desenvolvimento de sites era mais restrito aos programadores/desenvolvedores (ou seja, não era tão fácil para qualquer pessoa criar um site como hoje). Com a introdução de ferramentas automatizadas para criar sites sem escrever código, como o WordPress, as pessoas começaram a criar páginas sem saber o que está por trás delas (a pessoa pode testar um site, notar que está bonito e funcionando e acreditar que a usabilidade será adequada para todos, por exemplo). Ou em outros casos, não saber nem mesmo que existem ferramentas para que os deficientes naveguem na web. Segundo uma pesquisa conduzida pela W3Techs (, mais de 40% dos sites da internet são feitos em WordPress.</p>
				<p>“WordPress is used by 43.2% of all the websites, that is a content management system market share of 63.3%.”</p>
				<h4>Fechamento de apps populares</h4>
				<p>Um outro problema relacionado ao tema da acessibilidade digital está no fechamento cada vez maior de sites e apps. Isso impede o acesso por meios externos ou programas alternativos. Por exemplo, o Twitter, de acordo com sua própria conta oficial administrada pelos desenvolvedores (Twitter Dev, 2023), está encerrando sua API gratuita, o que pode impedir muitos clientes de Twitter adaptados de funcionar, como o TW Blue.</p>
				<p>Isso dificulta a evolução de soluções específicas para cegos, como o Dosvox, que possui diversos programas para acesso a diferentes plataformas (o Cartavox para acesso a e-mail, o Webvox para acesso a sites web etc.”</p>
				<h4>Interatividade em excesso nos sites e apps</h4>
				<p>Além das dificuldades já citadas, existem outros problemas causados pela web atual, como o uso de interatividade em excesso nos sites e apps. Alguns exemplos são o uso de carrosséis nos sites, menus dropdown projetados sem acessibilidade em mente, botões que funcionam apenas com o mouse, entre outros. Buscando compreender o impacto desses carrosséis na usabilidade dos sites em diferentes tipos de deficiências, a MWPT realizou uma entrevista com Odilon Gonsalves, gerente de tecnologia e inovação do Museu da Pessoa e especialista em design acessível () (2021).
				Odilon afirma: “Eu sou a favor da eliminação de carrosséis como os usados em muitas lojas virtuais, que são aqueles que têm muitos itens sequenciados, pouco tempo para ler cada destaque e aquelas “microbolinhas” que sinalizam qual deles está sendo exibido.</p>
				<p>Sou a favor que os carrosséis sejam usados de forma pensada e “acessibilizada”. Ou seja, que sejam usados em casos em que não há outra alternativa, como em algumas experiências pontuais de navegação em exposições virtuais.</p>
				<h4>Uso e popularização dos smartphones</h4>
				<p>Outro fator que pode influenciar bastante na acessibilidade digital é o uso de smartphones, que se tornou até mais comum que o uso do computador nos dias de hoje. De acordo com uma pesquisa realizada pela Fundação Getúlio Vargas (FGV, 2022), em junho de 2022, o Brasil possui mais smartphones que habitantes no total. São cerca de 214 milhões de habitantes, segundo o IBGE, e 242 milhões de smartphones.</p>
				<p>Mas até que ponto isso influencia na acessibilidade para pessoas com deficiência? Na verdade, isso varia bastante de acordo com cada usuário, pois alguns conseguem se adaptar bem às telas sensíveis ao toque, enquanto outros preferem o uso de um teclado físico. Como os celulares também têm leitores de tela e outras tecnologias atualmente, o touch screen acaba não prejudicando tanto a experiência.</p>
				<p>Embora os smartphones, por si mesmos, não prejudiquem a acessibilidade digital, ainda é essencial que as empresas desenvolvam interfaces adequadas a ela.</p>
				<p>De acordo com A. G. T. S. Filho (: “o design de informação tem como principal preocupação a percepção da informação pelos seres humanos, ou seja, como as pessoas traduzem o que veem e ouvem em conhecimento.”</p>
			</Section>
			<Section title="Metodologia">
				<p>Este projeto de pesquisa incluiu diversos passos de realização, como a criação de formulários digitais de pesquisa e a busca de estudos bibliográficos em fontes adequadas. Porém, o principal pilar para a realização do projeto Accessibling é a sua aplicação técnica, um website de mesmo nome. Neste site, os usuários de tecnologia com qualquer tipo de deficiência poderão avaliar a acessibilidade de qualquer site ou app da sua escolha, enviando uma avaliação à página específica da empresa desenvolvedora dentro da própria aplicação. Para isso, a empresa deverá estar cadastrada no catálogo de empresas do site, com dados como nome, CNPJ, e-mail para contato, endereço e outros. Cada usuário poderá dar uma nota à acessibilidade do site ou app dessa empresa, podendo variar de 1 a 5 estrelas. O usuário também poderá escrever um pequeno texto, explicando o que viu de positivo e negativo na acessibilidade daquele site ou app e o que pode ser feito para melhorá-la. Se desejar, a empresa poderá enviar uma resposta à avaliação realizada.</p>
				<p>Com base em todas as avaliações que recebeu, cada empresa receberá uma nota média, também em estrelas. O objetivo desse site de avaliação não é dar uma nota fixa e definitiva para cada empresa, mas sim acompanhar a evolução ou mesmo queda de cada uma. Assim, se desejarem, os usuários poderão trocar as avaliações que realizaram. Assim, a avaliação antiga deixa de contar na nota média da empresa, e passa a contar então a nova avaliação.</p>
				<p>Caso uma determinada empresa se destaque e tenha uma nota considerada muito boa, ela receberá um selo oficialmente concedido pelo site, chamado selo de valorização ao usuário. Ele mostra que a empresa tem compromisso e se importa com o tema da acessibilidade digital, além de incentivar as empresas a continuarem seus esforços na área, dando-lhes reconhecimento. Esse selo poderá ser colocado no site oficial da empresa, como forma de divulgação, com um link para a página da companhia no site de avaliações.</p>
				<p>A aplicação técnica será dividida em diversas páginas distintas, cada uma atendendo a uma funcionalidade específica. Isso inclui uma página de login, uma página de criação de conta, uma página de cadastro de empresa, uma página de rankings, entre outras. O site também está sendo desenvolvido de forma a ser o mais acessível possível para pessoas com todos os tipos de deficiência.</p>
			</Section>
			<Section title="Conclusões parciais">
				<p>Durante a realização deste projeto de pesquisa, foi criado um formulário de pesquisa com o objetivo de avaliar o conhecimento das pessoas da área da programação sobre o tema acessibilidade digital. Esta pesquisa incluiu respostas de diversos públicos distintos, como desenvolvedores, professores ou mesmo entusiastas da área de programação. Ela foi realizada com um total de 44 participantes. Abaixo, estão as principais conclusões obtidas com a pesquisa.</p>
					<ul>
						<li>Grande parte dos entrevistados já tinha ouvido falar sobre acessibilidade digital. Isso é algo positivo, considerando o que foi imaginado antes da pesquisa;</li>
						<li>O número de participantes que nunca realizaram nenhum teste de acessibilidade, embora não seja tão elevado, abrange quase a metade dos participantes, o que ainda pode levar a problemas em muitos sites e apps;</li>
						<li>Um indicador bastante positivo foi que, entre os desenvolvedores front-end, 65,6% dos participantes já ouviram falar da especificação ARIA, que contém regras bastante importantes para a acessibilidade digital de sites web. Isso não era esperado antes da realização da pesquisa;</li>
						<li>Muitos desenvolvedores não possuem nem mesmo o conhecimento para ajudar a melhorar a acessibilidade de um site ou app, o que foi dito por mais da metade dos participantes;</li>
						<li>A discussão da acessibilidade digital nos times de desenvolvimento varia bastante entre as empresas, com algumas que o discutem e outras que não. Porém, poucos entrevistados disseram que o tema é discutido com frequência dentro das empresas em que trabalham;</li>
					</ul>
					<p>Os participantes também foram questionados sobre o que seria necessário fazer para melhorar a acessibilidade digital nas empresas em que eles trabalhavam. As principais considerações foram:</p>
					<ul>
						<li>Deve haver pessoas capacitadas ou pessoas com deficiência para testar/validar a acessibilidade;</li>
						<li>Demonstrar a necessidade e importância da inclusão, por exemplo colocar textos explicativos, no caso de um jogo;</li>
						<li>Conscientização pública, devendo ser replicada pelos times de comunicação da empresa, trazendo o tema para o censo comum;</li>
						<li>Talvez os contratantes (empresas) não possuam interesse no tema;</li>
						<li>Aprender a usar coisas mais simples, como texto alternativo em imagens e tags semânticas, pode em muitos casos tirar a necessidade de uso de ferramentas mais avançadas como ARIA;</li>
						<li>Incentivar o aumento de outros indicadores da empresa (além do lucro);</li>
						<li>Presenciar os esforços que uma pessoa com deficiência faz para acessar o site ou app;</li>
						<li>Grandes empresas devem trazer o tema como requisito para vagas de emprego e em seus módulos e certificações;</li>
						<li>Mais canais e blogs que ensinem sobre o uso do ARIA e outros recursos, material escaço em português e com fácil compreenção;</li>
					</ul>
					<p>Por fim, os participantes foram solicitados a deixar algum comentário ou sugestão sobre o tema do formulário. As principais considerações foram:</p>
					<ul>
						<li>O questionário deveria ser voltado a designers e não programadores, pois programadores apenas fazem o que é pedido, e designers que fazem sketchs e outros materiais;</li>
						<li>Um dos participantes tinha um app de dislexia para pessoas com dificuldade de leitura e escrita;</li>
						<li>Um dos participantes disse que a sua empresa fazia testes de acessibilidade com os 2 tipos de dautonismo (dificuldade ao distinguir vermelho e verde e azul e amarelo);</li>
						<li>As empresas e equipes de desenvolvimento devem entender que todos têm direito ao acesso, e que limitar o acesso limita a renda;</li>
						<li>A acessibilidade muitas vezes é proposta pelos times de UX/UI, mas não interessa ao cliente;</li>
						<li>Muitas vezes os sites são complicados demais, e os desenvolvedores esperam que as ferramentas encontrem todos os erros de acessibilidade;</li>
						<li>Um deles disse que na sua empresa, a acessibilidade é obrigada por lei (um banco público);</li>
						<li>Infelizmente a acessibilidade deve ser sim movida pela ganância, dificilmente haverá empatia real de gestores, desenvolvedores ou vendedores;</li>
						<li>Um dos participantes disse que mesmo não sendo da área do front-end, estuda sobre o tema e busca aplicar a acessibilidade sempre que possível.</li>
					</ul>
					<p>Como conclusão sobre a pesquisa realizada, pode-se dizer que os indicadores são bastante divididos em relação ao tema, embora alguns deles tenham sido maiores que o esperado. Algo que precisa de mais atenção é a discussão ampla desse tema dentro dos times de desenvolvimento, além de um maior conhecimento e conscientização dos desenvolvedores sobre o tema, como através de treinamentos ou workshops feitos pelas empresas.</p>
			</Section>
			<Section title="Referências resumidas">
				<p>Estas referências não dizem respeito à todas as pesquisas realizadas no projeto, mas sim apenas às contidas neste site. Para ler todas as referências, <a href="projeto_de_pesquisa_acessibilidade_digital.pdf" target="_blank">Acesse o documento com o projeto completo (abre em uma nova guia)</a>.</p>
				<p>BRASIL. Governo Federal Brasileiro. <b>Acessibilidade Digital.</b> 200?. Disponível em: <a href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital">https://www.gov.br/governodigital/pt-br/acessibilidade-digital</a>. Acesso em: 16/05/2023.</p>
				<br/>
				<p>UO. University of Oregon, EUA. <b>What is digital accessibility</b>. 200? Disponível em: <a href="https://digitalaccessibility.uoregon.edu/about/whatisda">https://digitalaccessibility.uoregon.edu/about/whatisda</a>. Acesso em: 17/05/2023.</p>
				<br/>
				<p>MWPT, Movimento Web para Todos; BigDataCorp. <b>Número de sites brasileiros aprovados em todos os testes de acessibilidade tem queda em relação ao ano passado e é ainda menor que 1%</b>. 2022. Disponível em: <a href="https://mwpt.com.br/numero-de-sites-brasileiros-aprovados-em-todos-os-testes-de-acessibilidade-tem-queda-em-relacao-ao-ano-passado-e-e-ainda-menor-que-1/">"https://mwpt.com.br/numero-de-sites-brasileiros-aprovados-em-todos-os-testes-de-acessibilidade-tem-queda-em-relacao-ao-ano-passado-e-e-ainda-menor-que-1/</a>. Acesso em: 17/05/2023.</p>
				<br/>
				<p>MWPT, Movimento Web para Todos; Big Data Corp. <b>Número de sites brasileiros aprovados em todos os testes de acessibilidade mantém crescimento, mas ainda é menos de 1% do total</b>. 22 de julho de 2021. Disponível em: <a href="https://mwpt.com.br/numero-de-sites-brasileiros-aprovados-em-todos-os-testes-de-acessibilidade-mantem-crescimento-mas-ainda-e-menos-de-1-do-total/">https://mwpt.com.br/numero-de-sites-brasileiros-aprovados-em-todos-os-testes-de-acessibilidade-mantem-crescimento-mas-ainda-e-menos-de-1-do-total/</a>. Acesso em: 29 de novembro de 2023.</p>
				<br/>
				<p>TWITTER, Dev. <b>We will no longer support free access to the Twitter API, both v2 and v1.1.</b> 2 de fevereiro de 2023. Disponível em: <a href="https://twitter.com/TwitterDev/status/1621026986784337922">https://twitter.com/TwitterDev/status/1621026986784337922</a>. Acesso em: 29/05/2023.</p>
				<br/>
				<p>GONSALVES, Odilon. MWPT. <b>Carrosséis em sites são inimigos da acessibilidade?</b> 22 de novembro de 2021. Disponível em: <a href="https://mwpt.com.br/carrosseis-em-sites-sao-inimigos-da-acessibilidade/">https://mwpt.com.br/carrosseis-em-sites-sao-inimigos-da-acessibilidade/</a>. Acesso em: 31/05/2023.</p>
				<br/>
				<p>Fundação Getúlio Vargas (FGV). <b>Panorama do Uso de TI no Brasil - 2022.</b> Junho de 2022. Disponível em: <a href="https://portal.fgv.br/artigos/panorama-uso-ti-brasil-2022">https://mwpt.com.br/carrosseis-em-sites-sao-inimigos-da-acessibilidade/</a>. Acesso em: 04/06/2023.</p>
				<br/>
				<p>FILHO, A. G. T. S. SANTOS, G. M. <b>A Ampliação da percepção da interface para pessoas com deficiência visual através de recursos em smartphones: Uma perspectiva do design da informação sobre a acessibilidade digital.</b> Setembro de 2015. Disponível em: <a href="https://www.academia.edu/download/38997604/A_ampliacao_da_percepcao_da_interface_para_pessoas_com_deficiencia_visual_atraves_de_recursos_em_smartphones.pdf">https://www.academia.edu/download/38997604/A_ampliacao_da_percepcao_da_interface_para_pessoas_com_deficiencia_visual_atraves_de_recursos_em_smartphones.pdf</a>. Acesso em: 06/06/2023.</p>
				<br/>
			</Section>
			<Section title="Mockup do projeto">
				<p>Este mockup foi criado antes da última mudança de nome do projeto. Assim, o nome do projeto está diferente nas páginas dele.</p>
				<iframe id="mockup-preview" src="https://senacscs.github.io/t2/gabriel/mockup_rastreador_de_acessibilidade/index.html" title="Mockup do site criado no projeto"></iframe>
			</Section>
		</div>
	);
}
export default Content;