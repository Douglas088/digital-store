import Logoicon from "./assets/icone-logo.png"
import styled from "styled-components";

const ContainerLogo = styled.div`

    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 36.4px;
        font-weight: 600;
        color: var(--primary);
    }
`;

const Logo = () => {
    return ( 
        <ContainerLogo>
            <img src={Logoicon} alt="icone da digital store" />
            <span>Digital Store</span>
        </ContainerLogo>
     );
}
 
export default Logo;