import styled from 'styled-components';

const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;
`;

const Form = styled.div`
  height: 500px;
  width: 100%;
  background-color: #333333;
  border-radius: 10px;
  color: #fff;

  table {
    background-color: lightgreen;
    width: 90%;
    margin: auto;
    margin-top: 40px;

    tr {
      /* background-color: lightskyblue; */
    }
  }
`;

export { FormBox, Form };