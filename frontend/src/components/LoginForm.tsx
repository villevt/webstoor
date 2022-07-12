import React from 'react';
import { useState } from 'react';

import userApi from '../requests/user';

import styled from 'styled-components';
import {Colors} from "../styles";

const StyledForm = styled.form`
    align-items: center;
    background: ${Colors.get("White")};
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    padding: 2em;
    gap: 1em;
`;

const StyledB = styled.b`
    color: ${Colors.get("Main")};
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
    color: ${Colors.get("Main")};
    border: 2px solid ${Colors.get("Main")};
    padding: 0.2em 0.5em;
    width: 6em;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px ${Colors.get("Main")};
    }
`;

export const LoginForm = () => {
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "new-username": {
                setNewUsername(value);
                break;
            }
            case "new-password": {
                setNewPassword(value);
                break;
            }
        }
    }

    const handleLogin = () => {

    }

    const handleRegister = (event: React.FormEvent) => {
        userApi.Register(newUsername, newPassword)
        event.preventDefault();
    }
    
    return(
        <div>
            <StyledForm>
                <StyledB>Already a user?</StyledB>
                <StyledInput type="text" name="username" placeholder="Username"/>
                <StyledPassword type="password" name="current-password" placeholder="Password"/>
                <StyledInputSubmit type="submit" value="Login" />
            </StyledForm>
            <StyledForm onSubmit={handleRegister}>
                <StyledB>New user?</StyledB>
                <StyledInput type="text" name="new-username" value={newUsername} onChange={handleInputChange}/>
                <StyledPassword type="password" name="new-password" value={newPassword} onChange={handleInputChange}/>
                <StyledPassword type="password" name="new-password-confirm" placeholder="Confirm new password"/>
                <StyledInputSubmit type="submit" value="Register" />
            </StyledForm>
        </div>
    );
}