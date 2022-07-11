import coffe from "../../img/forYourPleasure/coffeImg.png";
import img from "../../img/logo.png";
import beans from "../../img/sectionImg.png";
import solimo from "../../img/MainPage/solimo.png";
import presto from "../../img/MainPage/presto.png";
import aristo from "../../img/cardImg.png";
import backgroundHeader from "../../img/forYourPleasure/header.png";
import { CardSection, Cards, Card, CardText } from "../CardList/CardList";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Nav, Ul, Title } from "../Header/Header";
import styled from "styled-components";
import {
  SectionInner,
  WrapperElement,
  Paragrah,
  ParagrahContainer,
  TextSection,
  Section,
  ImgSection,
} from "../About/About";

const HeaderInner = styled(HeaderContainer)`
  background: url(${backgroundHeader}) no-repeat center;
  background-size: cover;
`;

const HeaderTitle = styled(Title)`
  font-size: 32px;
`;

const ForYourPleasure = () => {
  return (
    <>
      <HeaderInner className="header">
        <Nav>
          <Ul className="navbar">
            <li>
              <NavLink to="/">
                <img src={img} alt="Logo" />
                {"Coffe house "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-coffe">Our coffee</NavLink>
            </li>
            <li>
              <NavLink to="/for-pleasure">For your pleasure</NavLink>
            </li>
          </Ul>
        </Nav>
        <HeaderTitle>For your pleasure</HeaderTitle>
      </HeaderInner>
      <Section>
        <SectionInner>
          <ImgSection>
            <img src={coffe} alt="Cup of coffe" />
          </ImgSection>
          <TextSection>
            <h2>About our goals</h2>
            <WrapperElement>
              <hr />
              <img src={beans} alt="Beans" />
            </WrapperElement>
            <ParagrahContainer>
              <Paragrah>
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
              </Paragrah>
              <Paragrah>
                Afraid at highly months do things on at. Situation recommend
                objection do intention so questions.
                <br />
                As greatly removed calling pleased improve an. <br />
                Last ask him cold feel met spot shy want. Children me laughing
                we prospect answered followed. At it went is song that held help
                face.
              </Paragrah>
            </ParagrahContainer>
          </TextSection>
        </SectionInner>
        <hr />
      </Section>
      <CardSection>
        <Cards>
          <Card>
            <img src={solimo} alt="Outyor Coffe 1kg" />
            <CardText>
              <h3>Outyor Coffe 1kg</h3>
              <h3>Japan</h3>
              <h4>8.20$</h4>
            </CardText>
          </Card>
          <Card>
            <img src={aristo} alt="Abutros 2kg" />
            <CardText>
              <h3>Abutros Brazzil 2kg</h3>
              <h3>Brazil</h3>
              <h4>13.45$</h4>
            </CardText>
          </Card>
          <Card>
            <img src={presto} alt="Ukranian Coffe 300g" />
            <CardText>
              <h3>Ukranian Coffe 300g</h3>
              <h3>Ukraine</h3>
              <h4>19.90$</h4>
            </CardText>
          </Card>
        </Cards>
      </CardSection>
    </>
  );
};

export default ForYourPleasure;
