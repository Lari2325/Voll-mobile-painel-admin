import styled from "styled-components";

const Container = styled.section`
  background-color: var(--cinza-claro);
  margin: 4em;
  border-radius: 16px;
  padding: 2em;
  height: 100%;

  @media (max-width: 768px) {
    margin: 2em;
    padding: 1em;
  }

  @media (max-width: 480px) {
    margin: 1em;
    padding: 0.5em;
  }
`;

export default Container;