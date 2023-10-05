// Importacao de estilos de temas e estilos principais
// importando estilos para folhas de estilo theme.css e primereact.min.css sao arquivos de estilos de terceiros
// que sao usados para estilizar a aplicacao. 
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
        
// Importação de estilos locais
import './App.css';

// Importação de componentes React de outras bibliotecas como Router
// ou que foram criados para o projeto como MTGList
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import CardsList from "./components/CardsList/CardsList";
import CardDetails from "./components/CardDetails/CardDetails";


function App() { // Funcao principal do componente "App"
  return ( // Retorno em JSX que e uma extensao javascript que permite escrever html no javascript
    // Classe da biblioteca react-router-dom que permite navegar pelas rotas e respectivos componentes
    <Router> 
      <div className="App">
        {/* interruptor, trocador, componente da biblioteca reac-router-dom que olha a rota atual
        e renderiza apenas o primeiro componente que corresponde a rota atual, ele sai procurando um componente
        que bate com a rota atual  */}
        <Switch> 
          {/* Route - parametro e a rota e retorno e o componente
          exact path="/" é a rota principal
          component MtgList é o componente que é recebido nessa rota */}
          <Route exact path="/" component={CardsList} />
          <Route exact path="/card/:id" component={CardDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;