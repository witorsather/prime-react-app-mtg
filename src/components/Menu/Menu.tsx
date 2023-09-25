import { Menubar } from "primereact/menubar";
import { useHistory } from 'react-router-dom';

// 1 Primeiro, o codigo cria um componente chamado Menu.
// 2 Dentro desse componente, ele define uma lista chamada items. Cada item dessa lista é um objeto que contem informacoes como o rotulo (label), ícone e o que fazer quando o usuario clica no item (command). No caso, ele muda a pagina.
// 3 Finalmente, o componente Menubar do PrimeReact e usado, e ele recebe essa lista items como argumento para saber o que mostrar e o que fazer quando um item é clicado.
// 4 O componente(classe) Menubar da biblioteca PrimeReact gera um HTML combinando os valores que passei em items com os recursos do proprio componente(classe). Isso cria um menu interativo na tela.
// 5 Objetivo final 'gerar um HTML'.

const Menu = () => {
   const history = useHistory(); // Usa React Router ou Roteador do React, ele serve para mudar de páginas ou de rotas da aplicação

   const items = [ // defino uma lista com 3 objetos, cada objeto tem 3 propriedades
      {
         label: "home",
         icon: "pi pi-home",
         command: () => {
            history.push("/"); // nome da propriedade : valor da propriedade, esse command permite quando clicar no botao chamar a acao funcao que e o valor dele que ira levar para a tela inicial da aplicacao
         }
      },
      {
         label: "Adicionar MTG",
         icon: "pi pi-plus",
         command: () => {
            history.push("/add");
         }
      },
      { 
         label: "Editar MTG",
         icon: "pi pi-pencil",
         command: () => {
            history.push("/edit");
         }
      }
   ]

   return <Menubar model={items} />;
};

export default Menu;
