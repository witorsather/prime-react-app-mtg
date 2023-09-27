import React, { FC, useEffect, useState } from 'react';
import { CardsListWrapper } from './CardsList.styled';
import axios from 'axios';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CardsList = () => {
   // Inicializando o estado 'cards' como uma lista vazia (array vazio)
   // E definindo uma funcao setCards para atualizar o valor do estado cards quando eu quiser
   const [cards, setCards] = useState([]);

   // Funcao da biblioteca React que atualiza o estado 'cards' para uma lista preenchida com o retorno da API.
   // UseEffect serve para controlar o que acontece quando inicia ou atualiza um componente, posso falar para
   // ele fazer algo a cada minuto ou apenas uma vez quando a tela carregar nesse caso ',[]'. 
   // Ja axios e uma biblioteca para fazer requisicoes http na internet e retornar o resultado json. 
   // UseEffect e axios estao sendo usados juntos porque quero ir buscar alguns dados na internet (com axios)
   // logo que o componente CardsList e mostrado na tela (com useEffect).
   // Imagine que voce queira saber a previsao do tempo. Voce usaria axios para ir ate o site de previsao do tempo, 
   // pegar esses dados e trazê-los para você.Se usar useEffect, o alarme nunca vai tocar. Se não usar axios, teria 
   // que ir buscar a previsao do tempo
   // manualmente, talvez atualizando a pagina do navegador.
   useEffect(() => {
      axios
        .get("https://api.magicthegathering.io/v1/cards")
        .then((response) => setCards(response.data.cards));
    }, []); // ,[] Diz que deve ser executada apenas uma vez quando a tela for chamada

    return (
      <div>
        <DataTable value={cards}>
          <Column field="name" header="Name"></Column>
          <Column field="imageUrl" header="manaCost"></Column>
        </DataTable>
      </div>
    )
};

export default CardsList;
