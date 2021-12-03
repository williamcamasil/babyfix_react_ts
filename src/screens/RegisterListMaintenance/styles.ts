import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 240px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Maintence = styled.div`
  width: 90%;
  h1 {
    font-weight: 500;
    text-align: start;
  }
`;

const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

const Form = styled.div`
  height: 500px;
  width: 100%;
  background-color: #333333;
  border-radius: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: auto;
`;

export { Container, Maintence, FormBox, Form, Buttons };
