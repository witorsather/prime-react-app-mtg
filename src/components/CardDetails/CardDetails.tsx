import React, { FC, useEffect, useRef, useState } from 'react';
import { CardDetailsWrapper } from './CardDetails.styled';
import { Root } from '../../model/card-model';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Card } from "primereact/card";

const CardDetails = () => {
   const [card, setCard] = useState<Root>();
   const { id } = useParams<{id: string}>();

   const [loading, setLoading] = useState(false);

   const buttonRef = useRef(null);
   const history = useHistory();

   const load = () => {
      setLoading(true);

      setTimeout(() => {
          setLoading(false);
      }, 2000);
  };

  function loadPage(){
   axios
     .get(`https://api.magicthegathering.io/v1/cards/${id}`)
     .then((response) => setCard(response.data));
 }

 function cliquei(){
   load();
   //history.push(`/edit/${id}`)
   //window.location.href=`/edit/${id}`;
   window.location.replace(`/edit/${id}`);
 }

 useEffect(() => {
   loadPage()
 },[]);

 if (!card) return null;

 return (
   <div>
     <Card title={card.card.name}>
       <img src={card.card.imageUrl} alt={card.card.name} />
       <div>
         <Button
           label="Edit"
           icon="pi pi-pencil"
           className="p-mr-2 p-button-success"
           ref={buttonRef}
           loading={loading}
           onClick={cliquei} 
           
         />
         <Button
           label="Delete"
           icon="pi pi-trash"
           className="p-button-danger"
         />
       </div>
     </Card>
   </div>
 );

};

export default CardDetails;
