import Header from "../Header/Header";
import styled from "styled-components";
import img from "../../img/Item/coffe.jpg";
import {
  WrapperElement,
  ImgSection,
  Section,
  SectionInner,
  TextSection,
} from "../About/About";
import beans from "../../img/sectionImg.png";
import { useParams } from "react-router-dom";

const SectionImg = styled(ImgSection)`
margin: 0 auto;

@media (max-width: 400px){
    display: flex;
    justify-content: center;
}

img {
    @media (max-width: 470px) {
      width: 100%;
    }
    @media (max-width: 400px){
        width: 75%;
    }
`;

const TitleText = styled.h3`
  margin: 15px 0;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  font-weight: 700;

  p {
    letter-spacing: 1.2px;
    font-weight: 700;
    padding-left: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 400px) {
    align-items: center;
  }
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
  padding-left: 15px;
`;

const DescriptionContainer = styled.div`
  max-width: 420px;
  text-align: left;

  @media (max-width: 400px) {
    text-align: center;
    font-size: 14px;
  }

  span {
    font-weight: 700;
  }
`;

const AboutItem = () => {
  const { itemDetails } = useParams();
  return (
    <>
      <Header />
      <Section>
        <SectionInner>
          <SectionImg>
            <img src={img} alt="Arismo coffe" />
          </SectionImg>
          <TextSection>
            <h2>About it</h2>
            <WrapperElement>
              <hr />
              <img src={beans} alt="Beans" />
            </WrapperElement>
            <TextContainer>
              <TitleText>
                {"Country: "}
                <p>{itemDetails}</p>
              </TitleText>
              <DescriptionContainer>
                <p>
                  <span>Description: </span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </DescriptionContainer>
              <TitleText>
                {"Price: "}
                <Price>6.99$</Price>
              </TitleText>
            </TextContainer>
          </TextSection>
        </SectionInner>
      </Section>
    </>
  );
};

export default AboutItem;
