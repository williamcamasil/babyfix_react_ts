import styled from 'styled-components';
import img from '../../assets/images/banner.jpg';

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
const About = styled.div`
  padding: 50px;
  height: 300px;
  background-color: lightblue;
`;
const Benefits = styled.div`
  padding: 50px;
  height: 500px;
  background-color: lightgray;
`;

export { Container, Banner, About, Benefits };
