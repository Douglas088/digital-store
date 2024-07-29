import { Link } from "react-router-dom";
import Drawnotfound from "../assets/undraw_page_not_found.svg";
import styled from "styled-components";

const Notfound = () => {
  return (
    <>
      <Container  >
        <img src={Drawnotfound} alt="Not found" />
        <h2>Página não encontrada!</h2>
        <Link to={"/"}>Voltar</Link>
      </Container >
    </>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: 700;

  img {
    height: 280px;
    width: 280px;
  }
  
`;

export default Notfound;
