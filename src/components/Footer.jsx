import Logofooter from "../assets/logo-digital.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Containerfooter>
        <div className="footer-content">
          <div className="descricao">
            <img src={Logofooter} alt="Logo da digital store" width={"253px"} />
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore
              et dolore.
            </p>
            <div className="redes-sociais">
              <a href="#">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-sharp/24/ffffff/facebook-f.png"
                  alt="facebook-f"
                />
              </a>
              <a href="#">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/ffffff/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
              <a href="#">
                <img
                  width="29"
                  height="29"
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"
                  alt="twitter--v1"
                />
              </a>
            </div>
          </div>
          <div className="information">
            <h4>Informações</h4>
            <a href="#">Sobre Drip Store</a>
            <a href="#">Segurança</a>
            <a href="#">Wishlist</a>
            <a href="#">Blog</a>
            <a href="#">Trabalhe conosco</a>
            <a href="#">Meus Pedidos</a>
          </div>
          <div className="categorias">
            <h4>Categorias</h4>
            <a href="#">Camisetas</a>
            <a href="#">Calças</a>
            <a href="#">Bonés</a>
            <a href="#">Headphone</a>
            <a href="#">Tênis</a>
          </div>
          <div className="contatos">
            <h4>Contatos</h4>
            <p>
              Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza -
              CE, 60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <div className="footer-content2">
          <p>@ 2022 Digital College</p>
        </div>
      </Containerfooter>
    </>
  );
};

const Containerfooter = styled.footer`
  background-color: var(--dark-gray);
  color: var(--white);
  height: 400px;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 4rem;

  a {
    color: var(--white);

    &:hover {
      color: var(--primary);
    }
  }

  .footer-content {
    display: flex;
    justify-content: center;
    margin: 0px 100px;
    gap: 5.6rem;

    .descricao {
      gap: 2.6rem;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;

      .redes-sociais {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
  .footer-content2 {
    width: 70%;
    border-top: 1px solid var(--white);
    text-align: center;

    p {
        margin: 0.5rem;
        font-size: 0.8rem;
    }
  }
`;

export default Footer;
