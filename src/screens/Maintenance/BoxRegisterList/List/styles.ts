import styled from 'styled-components';

const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;

  .delete-item :hover {
    color: red;
    transition: 0.3s;
  }
`;

const Form = styled.div`
  height: 700px;
  width: 100%;
  background-color: #333333;
  border-radius: 10px;
  color: #fff;
  overflow: auto;

  table {
    width: 95%;
    margin: auto;
    margin: 20px;
  }
  table thead {
    background: #000;
    font-weight: bold;
    color: #fff;
  }

  table .botyTable {
    background: #fff;
    color: #000;
  }

  table th,
  table td {
    padding: 7px 0;
  }

  p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: auto;
  margin-top: 40px;
`;

export { FormBox, Form, Buttons };
