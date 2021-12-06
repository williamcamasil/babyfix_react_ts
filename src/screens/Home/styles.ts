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

  h1 {
    color: #fff;
  }
`;
const BoxInformation = styled.div<BoxInformationProps>`
  padding: 50px;
  background-color: ${props => props.backgroundColor};

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

export { Container, Banner, BoxInformation };
