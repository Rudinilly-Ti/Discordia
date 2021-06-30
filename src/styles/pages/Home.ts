import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;


  display: flex;
  flex-direction: column;
`;

//FOOTER
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.colors.footer_background};

  >div {
      display: flex;
      flex-direction: column;

  justify-content: center;
  align-items: center;
  }
`;

export const About = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-around;
  align-items:baseline;

  margin-bottom: 20px;

  div {
    max-width: 330px;
    min-width: 200px;

    span {
      padding-top: 20px;
      width: 150px;
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-size: 40px;
      color: ${props => props.theme.colors.primary};
    }

    h5 {
      font-weight: normal;
      color: ${props => props.theme.colors.primary};
      font-size: 15px;
    }

    p {
      margin-top: 15px;
      font-size: 15px;
    }
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 0.1px solid ${props => props.theme.colors.primary};
  width: 1180px;

  padding-top: 35px;
  margin-top: 20px;
`;

export const ButtonFooter = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 40px;
  font-size: 14px;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;

  opacity: 1;
  transition: 0.3s;
  cursor: pointer;

  &:hover{
    opacity: 0.5;
  }
`;
