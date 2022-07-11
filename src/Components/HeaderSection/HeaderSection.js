import { HeaderContainer, Nav, Ul, Title } from "../Header/Header";
import styled from "styled-components";
import { WrapperElement } from "../About/About";
import beans from "../../img/sectionImg.png";
import img from "../../img/MainPage/HeaderSection.png";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Header = styled(HeaderContainer)`
  background: url(${img}) no-repeat center;
  background-size: cover;
  min-height: 640px;
`;

const NavContainer = styled(Nav)`
  @media (max-width: 780px) {
    padding: 30px 0;
  }
`;

const NavUl = styled(Ul)`
  @media (max-width: 780px) {
    justify-content: space-around;
  }

  li {
    @media (max-width: 325px) {
      margin-right: 20px;
    }
  }
`;

const WrapperForElement = styled(WrapperElement)`
  hr {
    background-color: #fff;
  }
  img {
    filter: invert(1);
    background: #485e91;
  }
`;

const HeaderTitle = styled(Title)`
  margin-top: 110px;

  @media (max-width: 780px) {
    font-size: 28px;
  }

  @media (max-width: 470px) {
    font-size: 24px;
  }

  @media (max-width: 405px) {
    margin-top: 80px;
    font-size: 18px;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justif-content: center;
  align-items: center;
`;

const TextTitle = styled.h2`
  margin-top: 15px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
  @media (max-width: 550px) {
    font-size: 18px;
  }

  @media (max-width: 405px) {
    font-size: 13px;
  }
`;

const TextSubtitle = styled.h3`
  margin: 20px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 550px) {
    font-size: 20px;
  }

  @media (max-width: 405px) {
    font-size: 13px;
  }
`;

const ButtonMore = styled.a`
  padding: 3px 40px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.25s linear;
  }

  @media (max-width: 390px) {
    font-size: 13px;
  }
`;

const HeaderSection = () => {
  const ScrollTo = () => {
    window.scrollTo(0, 550);
  };

  return (
    <Header className="header">
      <NavContainer>
        <NavUl className="navbar">
          <li>
            <NavLink to="/">
              <img src={logo} alt="Logo" />
              {"Coffe house"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/our-coffe">Our coffee</NavLink>
          </li>
          <li>
            <NavLink to="/for-pleasure">For your pleasure</NavLink>
          </li>
        </NavUl>
      </NavContainer>
      <TextSection>
        <HeaderTitle>Everything You Love About Coffee</HeaderTitle>
        <WrapperForElement>
          <hr />
          <img src={beans} alt="Beans" />
        </WrapperForElement>
        <TextTitle>We makes every day full of energy and taste</TextTitle>
        <TextSubtitle>Want to try our beans?</TextSubtitle>
        <ButtonMore onClick={() => ScrollTo()}>More</ButtonMore>
      </TextSection>
    </Header>
  );
};

export default HeaderSection;
