import React, { FC } from 'react';
import { MenuWrapper } from './Menu.styled';

interface MenuProps {}

const Menu: FC<MenuProps> = () => (
 <MenuWrapper data-testid="Menu">
    Menu Component
 </MenuWrapper>
);

export default Menu;
