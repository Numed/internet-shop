import styled from "styled-components";
import { Ul } from "../Header/Header";
import { WrapperElement } from "../About/About";
import img from "../../img/logo.png";
import beans from "../../img/sectionImg.png";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 30px;
  flex-direction: column;
`;

const Ulist = styled(Ul)`
  li {
    a {
      color: #000;
    }
    @media (max-width: 325px) {
      margin-right: 20px;
    }
  }

  img {
    filter: invert(1);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <nav>
        <Ulist>
          <li>
            <NavLink end to="/">
              <img src={img} alt="Logo" />
              {"Coffe house"}
            </NavLink>
          </li>
          <li>
            <NavLink end to="/our-coffe">
              Our coffee
            </NavLink>
          </li>
          <li>
            <NavLink end to="/for-pleasure">
              For your pleasure
            </NavLink>
          </li>
        </Ulist>
      </nav>
      <WrapperElement>
        <hr />
        <img src={beans} alt="Beans" />
      </WrapperElement>
    </FooterContainer>
  );
}

export default Footer;
