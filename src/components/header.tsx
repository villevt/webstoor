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
`

const StyledLogo = styled(Logo)`
  height: clamp(1rem, 4vh, 2.5rem);
  margin-bottom: 2em;
  margin-top: 2em;
`;

const AdminButton = styled(Button)`
  justify-self: flex-end;
`;

interface HeaderProps {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    return(
        <StyledHeader>
            <StyledLogo />
            <AdminButton>
                Admin
            </AdminButton>
        </StyledHeader>
    )
}