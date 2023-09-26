// index.tsx e o ponto de entrada(porta da casa) da aplicacao React, onde toda a aplicacao e inicializada. 

import React from 'react'; // Importando o modulo React da biblioteca react
import ReactDOM from 'react-dom/client'; // Importando o modulo ReactDOM da biblioteca react-dom
import './index.css'; // Importando estilos CSS
import App from './App'; // Importando o componente local App
import reportWebVitals from './reportWebVitals'; // Importando funcoes para medir o desempenho
import Menu from './components/Menu/Menu'; // Importando o componente local Menu

// Criando uma raiz de renderizacao React
// ReactDOM e um modulo da biblioteca react-dom responsavel por interagir com o DOM (Modelo de Objeto de Documento) do navegador. 
// A funcao createRoot e usada para criar uma raiz de renderizacao usada para renderizar componentes React na pagina.
// document.getElementById('root') e um metodo JavaScript que procura um elemento HTML na pagina com o atributo id igual a "root".
// Isso e comum em aplicacoes React, onde geralmente ha um elemento HTML com o ID "root" que serve como ponto de entrada para a renderizacao de componentes React.
// A expressao as HTMLElement especifica o tipo do elemento encontrado como HTMLElement (um elemento HTML generico).
// Resumindo, o codigo procura um elemento HTML existente com o ID "root" (<div id="root"></div>) na pagina (index.html) e cria uma raiz de renderizacao React associada a esse elemento.
// Isso conecta o React a pagina existente para renderizar os componentes React dentro desse elemento.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// O que esta acontecendo nesse trecho de codigo e que os componentes Menu e App estao sendo renderizados dentro da raiz
// de renderizacao root. Eles sao renderizados dentro do 
// Resumo: Essencialmente, esse trecho de codigo esta iniciando a renderizacao dos componentes Menu e App na pagina web, e qualquer conteudo
// gerado por esses componentes sera inserido no elemento HTML com o ID "root".
root.render( // Renderizando componentes dentro do "root" (<div id="root"></div>) na pagina (index.html)
  // <React.StrictMode> componente que envolve outros componentes, é um componente que ativa 
  // 1 verificacoes de modo estrito(rigoroso) para ajudar a identificar possiveis problemas no codigo e ajudar o dev.
  // 2 avisos sobre essas verificacoes
  <React.StrictMode>
    {/* componente local criado */}
    <Menu /> 
    {/* componente raiz do projeto */}
    <App /> 
  </React.StrictMode>
);

// Funcao para medir o desempenho da aplicacao
// o que essa funcao faz e colher dados e gerar relatorios de desempenho da aplicacao com base em diversas metricas, como o tempo de carregamento da pagina,
// o uso de recursos, entre outras. Esses relatorios podem ser posteriormente analisados para identificar areas de melhoria no desempenho
// da aplicacao. Essa funcao e chamada aqui em index.tsx para que desde o inicio da aplicacao ja posso colher esses dados para criar os relatorios
reportWebVitals();
