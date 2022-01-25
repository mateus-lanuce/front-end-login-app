import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    min-height: 100vh;
    padding: 0 2rem;
`;

export const Title = styled.h1`
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    background-color: #f1f1f1;
    width: 100%;
    max-width: 480px;
    padding: 0.5rem;
`;

export const Field = styled.div`
    padding-bottom: 0.5rem;
`;

export const Label = styled.label`
    display: block;
`;

export const Input = styled.input`
    width: 100%;
`;

export const Button = styled.button`
    width: 30vh;
    height: 4vh;
    margin-top: 1rem;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

