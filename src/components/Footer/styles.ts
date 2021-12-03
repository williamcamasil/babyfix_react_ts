import styled from 'styled-components';

const Container = styled.div`
  background-color: #232528;
  width: 100%;
`;

const FooterComponent = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 190px;
  color: #fff;

  .social-images {
    margin-top: 50px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

export { Container, FooterComponent, Img };
