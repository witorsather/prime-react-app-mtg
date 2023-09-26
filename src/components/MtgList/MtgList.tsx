import React, { FC } from 'react';
import { MtgListWrapper } from './MtgList.styled';

interface MtgListProps {}

const MtgList: FC<MtgListProps> = () => (
 <MtgListWrapper data-testid="MtgList">
    MtgList Component
 </MtgListWrapper>
);

export default MtgList;
