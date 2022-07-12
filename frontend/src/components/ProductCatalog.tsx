import React from 'react';
import styled from 'styled-components';

import {Colors} from "../styles";

interface ProductCatalogProps {
}

const StyledDiv = styled.div`
    filter: drop-shadow(2px 2px ${Colors.get("White")});
`

export const ProductCatalog = (props: ProductCatalogProps) => {
    return(
        <StyledDiv></StyledDiv>
    );
}