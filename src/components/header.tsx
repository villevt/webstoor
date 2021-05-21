import {Button} from "./button";
import {Logo} from "./logo";

import {Colors} from '../styles';
import styled from 'styled-components';

const StyledHeader = styled.div`
  align-items: center;
  background-image: linear-gradient(${Colors.get("Light")}, #fff);
  display: flex;
  gap: 1em;
  justify-content: center;
  height: clamp(3rem, 12vh, 7.5rem);
`;

const HeaderSide = styled.div`
    width: 40%;
`;

const HeaderMid = styled.div`
    width: 20%;
`;

const StyledLogo = styled(Logo)`
  height: clamp(1rem, 4vh, 2.5rem);
  margin: auto; 
  width: 100%;
`;

const AdminButton = styled(Button)`
  display: block;
  justify-self: flex-end;
  margin-left: auto;
  margin-right: 3em;
  font-size: 1.2em;
`;

interface HeaderProps {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    return(
        <StyledHeader>
            <HeaderSide />
            <HeaderMid>
                <StyledLogo />
            </HeaderMid>
            <HeaderSide>
                <AdminButton>
                    admin
                </AdminButton>
            </HeaderSide>
        </StyledHeader>
    )
}