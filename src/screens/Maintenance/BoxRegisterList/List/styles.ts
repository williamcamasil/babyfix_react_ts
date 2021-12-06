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
    width: 100%;
    text-align: center;
    margin: 5px 0;
  }
  table thead {
    background: #000;
    font-weight: bold;
    color: #fff;
  }
  table tbody tr:nth-child(2n) {
    background: #c0121a;
  }
  table th,
  table td {
    padding: 7px 0;
  }
`;

export { FormBox, Form };
