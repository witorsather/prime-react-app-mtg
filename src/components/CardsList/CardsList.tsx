import React, { FC } from 'react';
import { CardsListWrapper } from './CardsList.styled';

interface CardsListProps {}

const CardsList: FC<CardsListProps> = () => (
 <CardsListWrapper data-testid="CardsList">
    CardsList Component
 </CardsListWrapper>
);

export default CardsList;
