import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    min-height: 100vh;
    min-width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 80vh;
    width: 30vw;
    border-radius: 10px;

    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);

    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;

    @media only screen and (max-width: 320px) {
        width: 80vw;
        height: 90vh;

        hr {
            margin-bottom: 0.3rem;
        }

        h4 {
            font-size: small;
        }
    }

    @media only screen and (min-width: 360px) {
        width: 80vw;
        height: 90vh;

        h4 {
            font-size: small;
        }
    }

    @media only screen and (min-width: 411px) {
        width: 80vw;
        height: 90vh;
    }

    @media only screen and (min-width: 768px) {
        width: 80vw;
        height: 80vh;
    }

    @media only screen and (min-width: 1024px) {
        width: 60vw;
        height: 70vh;
    }

    @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 80vh;
    }

    @media only screen and (min-width: 1366px) {
        width: 30vw;
        height: 90vh;
    }
`;

export const Title = styled.h2`
    margin: 2rem 0 2rem 0;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 40%;
    width: 100%;

`;

export const Field = styled.div`
    
`;

export const Label = styled.label`
    
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    
    border-radius: 2rem;
    border: none;
    outline: none;

    width: 80%;
    height: 3rem;
    padding: 1rem;
    margin-top: 0.5rem;

    color: #fff;
    font-size: 1rem;
    font-weight: bold;

    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }

    &::placeholder {
        color: #b9abe0;
        font-weight: 100;
        font-size: 1rem;

    }
`;

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    text-transform: uppercase;
    letter-spacing: 0.2rem;

    width: 65%;
    height: 3rem;

    background: linear-gradient(to right, #14163c 0%, #03217b 79% );
    border: none;
    border-radius: 2rem;
    color: #fff;

    text-align: center;
    cursor: pointer;
    
`;

export const LoginWith = styled.h5`
    cursor: pointer;
`;

export const HorizontalLine = styled.hr`
    width: 90%;
    height: 0.3rem;
    
    border: none;
    border-radius: 0.8rem;

    margin: 1.5rem 0 1rem 0;
    background: linear-gradient(to right, #14163c 0%, #03217d 79%);
    backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    margin: 2rem 0 3rem 0;

    width: 80%;
`;

export const ForgotPassword = styled.div``

;