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
    width: 30rem;
    gap: 1em;
`;

const StyledB = styled.b`
    margin-top: 2em;
`

const StyledInput = styled.input`
    display: block;
    color: ${Colors.get("Main")};
    border: none;
    border-bottom: 2px solid ${Colors.get("Main")};
    padding: 0.2em 0.5em;
    font-size: 1em;
    width: 18rem;
    :focus {
        outline: none;
        box-shadow: 0px 0px 4px ${Colors.get("Main")};
    }
    ::placeholder {
        color: ${Colors.get("Main")};
    }
`;

// Fix for Firefox improperly displaying password field
const StyledPassword = styled(StyledInput)`
    font-family: sans;
    :placeholder-shown {
        font-family: inherit;
    }
`;

const StyledInputSubmit = styled.input`
    background: none;
    border-radius: 50px;
    color: ${Colors.get("Main")};
    border: 2px solid ${Colors.get("Main")};
    padding: 0.2em 0.5em;
    width: 6em;
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
            <StyledB>Already a user?</StyledB>
            <StyledInput type="text" name="username" placeholder="Username"/>
            <StyledPassword type="password" name="current-password" placeholder="Password"/>
            <StyledInputSubmit type="submit" value="Login" />
            <StyledB>New User?</StyledB>
            <StyledInput type="text" name="username" placeholder="Username"/>
            <StyledPassword type="password" name="new-password" placeholder="New password (min. 16 characters)"/>
            <StyledPassword type="password" name="new-password" placeholder="Confirm new password"/>
            <StyledInputSubmit type="submit" value="Register" />
        </StyledForm>
    );
}