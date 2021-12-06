import styled from 'styled-components';
import img from '../../assets/images/banner.jpg';

interface BoxInformationProps {
  backgroundColor: string;
}

const Container = styled.div`
  /* height: calc(100vh - 240px); */
`;

const Banner = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  div {
    text-align: center;
  }

  h1 {
    font-weight: 300;
    font-size: 40px;
  }

  p {
    padding: 30px 0;
  }

  a {
    border: 2px solid #fff;
    color: #fff;
    padding: 5px 30px;
    border-radius: 5px;
    text-decoration-line: none;
  }
`;
const BoxInformation = styled.div<BoxInformationProps>`
  padding: 50px;
  background-color: ${props => props.backgroundColor};

  div {
    max-width: 1200px;
    margin: auto;
  }

  h2 {
    color: #c0121a;
    text-align: center;
    margin: 20px 0;
    font-size: 30px;
    font-weight: 300;
  }

  p {
    font-family: Ubuntu, sans-serif;
  }
`;

const Benefits = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Benefit = styled.div`
  width: 48%;
  margin-right: 2%;

  hr {
    width: 10%;
    margin: 10px 0;
  }
`;

export { Container, Banner, BoxInformation, Benefits, Benefit };
