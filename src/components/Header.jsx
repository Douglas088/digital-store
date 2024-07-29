import Logo from "../Logo";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState("");

  return (
    <HeaderContainer>
      <div className="container">
        <div className="content-header">
          <Logo />

          <span className="p-input-icon-right">
            <i className="pi pi-search" />
            <StyledInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Pesquisar produto..."
            />
          </span>

          <NavLink to="/cadastro" className="link">
            Cadastre-se
          </NavLink>

          <StyledButton label="Entrar" />

          <NavLink to="/carrinho">
            <span
              className="pi pi-shopping-cart"
              style={{ fontSize: "1.3rem", color: "var(--primary)" }}
            ></span>
          </NavLink>
        </div>

        <nav>
          <ul>
            <li><StyledNavLink exact to="/">Home</StyledNavLink></li>
            <li><StyledNavLink to="/produtos">Produtos</StyledNavLink></li>
            <li><StyledNavLink to="/categorias">Categorias</StyledNavLink></li>
            <li><StyledNavLink to="/meus-pedidos">Meus Pedidos</StyledNavLink></li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  .container {
    margin: 34px 0;
  }

  .content-header {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-bottom: 3rem;

    .p-input-icon-right {
      position: relative;

      .pi {
        color: var(--dark-gray-3);
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer; /* Garantir que o cursor de ponteiro seja aplicado corretamente */
      }

      .pi-search {
        cursor: pointer; /* Adicionando explicitamente a classe para garantir que o cursor de ponteiro funcione */
      }
    }

    .link {
      color: var(--dark-gray-2);
      border-bottom: 1px solid;
      transition: color 200ms;

      &:hover {
        color: var(--primary);
      }
    }
  }

  nav {
    ul {
      display: flex;
      gap: 2rem;
    }

    .active {
      color: var(--primary);
      border-bottom: 2px solid var(--primary);
    }
  }
`;

const StyledInput = styled(InputText)`
  height: 60px;
  width: 530px;
  padding-left: 10px;
  background-color: rgba(204, 204, 204, 0.2);
  opacity: 0.4;

  &::placeholder {
    color: var(--dark-gray-3);
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: var(--primary);
  color: var(--light-gray-3);
  height: 40px;
  width: 114px;
  border: none;
  border-radius: 8px;
  font-weight: bolder;
  transition: background-color 200ms;

  &:hover {
    background-color: var(--tertiary);
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--dark-gray-2);
  transition: 200ms;

  &.active {
    font-weight: 600;
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
  }

  &:hover {
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    transition: 200ms;
  }
`;

export default Header;
