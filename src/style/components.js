import styled from 'styled-components';


export const Button = styled.button`
    background: ${props => props.bg ? props.bg : "transparent"};
    color: ${props => props.value > 10 ? "tomato" : "white"};
    font-size: 1.5rem;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
`;


