import styled from 'styled-components';

const Container = styled.div`
  background-color: #232528;
  width: 100%;
`;

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 120px;
  margin: auto;
  max-width: 1200px;
`;

const ImageLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
  }
`;

const Menu = styled.nav`
  flex: 1;
  height: 100%;

  ul {
    display: flex;
    height: 100%;
    justify-content: end;
    align-items: center;
    list-style: none;
  }

  a {
    color: #fff;
    text-decoration-line: none;
    padding: 20px;
    text-transform: uppercase;
  }

  a:hover {
    color: #777777;
    transition: 0.5s;
  }
`;

export { Container, HeaderComponent, ImageLogo, Menu };
