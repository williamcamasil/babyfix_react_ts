import styled from 'styled-components';

const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;
`;

const Form = styled.div`
  width: 100%;
  background-color: #333333;
  border-radius: 10px;
  color: #fff;
  padding: 30px 0;
`;

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;

  label {
    text-align: start;
    margin-bottom: 5px;
    font-size: 15px;
  }

  input {
    border-radius: 5px;
    border: none;
    padding: 6px;
  }
`;

const InputAddress = styled.div`
  display: flex;
  flex-direction: row;
  width: 44%;
  margin: auto;
`;

export { FormBox, Form, InputStyle, InputAddress };
