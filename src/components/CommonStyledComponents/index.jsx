import styled from 'styled-components'

export const MainContent = styled.section`
        padding: 2em;
        background: #ffffff;
        border-radius: 25px;
    `;

export const Wrapper = styled.div`
    padding: 4em;
    background: #dcdfe4;
`;

export const GreetHeader = styled.h2`
        font-style: normal;
    `;

export const DateTimeHeader = styled.h4`
    font-style: normal;
`;

export const UserInfoHeader = styled.h2`
        font-style: normal;
        margin-bottom: 50px;
    `;

export const CategoriesSection = styled.section`
    // padding: 1em;
    // border-radius: 25px;
`;

export const RightSideWrapper = styled.section`
    background: ${props => props.inputColor || "#f2f5ee"};
    padding: 1rem;
    border-radius: 15px;
`;