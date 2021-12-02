import styled from 'styled-components';

const Container = styled.div`
  background-color: #232528;
  padding: 0 40px;
`;

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 120px;
`;

const ImageLogo = styled.div`
  display: flex;
  width: 150px;
  justify-content: center;
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
