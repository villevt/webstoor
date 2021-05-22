import styled from 'styled-components';
import {Colors} from "../styles";

interface InfoPanelProps {
    className?: string
}

const StyledForm = styled.form`
    align-items: center;
    background: ${Colors.get("White")};
    border: 3px solid ${Colors.get("Main")};
    border-top: none;
    border-left: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 30em;
    gap: 2em;
`;

const StyledLabel = styled.label`
    display: block;
`;

const StyledInput = styled.input`
    display: block;
    color: ${Colors.get("Main")};
    border: none;
    border-bottom: 2px solid ${Colors.get("Main")};
    padding: 0.2em 0.5em;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px ${Colors.get("Main")};
    }
`;

const StyledInputSubmit = styled.input`
    background: none;
    border-radius: 50px;
    color: ${Colors.get("Main")};
    border: 2px solid ${Colors.get("Main")};
    padding: 0.2em 0.5em;
    width: 8em;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px ${Colors.get("Main")};
    }
`;

const FormRow = styled.div`
    display: flex;
    gap: 1em;
`

export const InfoPanel = (props: InfoPanelProps) => {
    return(
        <StyledForm>
            <b>Register / Login</b>
            <StyledInput type="text" name="uname" placeholder="Username"/>
            <StyledInput type="text" name="uname" placeholder="Password"/>
            <FormRow>
                <StyledInputSubmit type="submit" value="Register" />
                <StyledInputSubmit type="submit" value="Login" />
            </FormRow>
        </StyledForm>
    );
}