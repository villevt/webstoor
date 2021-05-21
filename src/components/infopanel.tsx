import styled from 'styled-components';
import {Colors} from "../styles";

interface InfoPanelProps {
    className?: string
}

const StyledForm = styled.form`
    align-items: center;
    background: ${Colors.get("White")};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 30em;
    gap: 1em;
`;

const StyledLabel = styled.label`
    display: block;
`;

const StyledInput = styled.input`
    display: block;
    border: 2px solid ${Colors.get("Main")};
`;

const StyledInputSubmit = styled.input`
    background: none;
    border-radius: 50px;
    color: ${Colors.get("Main")};
    border: 2px solid ${Colors.get("Main")};
`;

export const InfoPanel = (props: InfoPanelProps) => {
    return(
        <StyledForm>
            Register / Login
            <StyledLabel>
                Username
                <StyledInput type="text" name="uname" />
            </StyledLabel>
            <StyledLabel>
                Password
                <StyledInput type="password" name="pword" />
            </StyledLabel>
            <StyledInputSubmit type="submit" value="Register" />
            <StyledInputSubmit type="submit" value="Login" />
        </StyledForm>
    );
}