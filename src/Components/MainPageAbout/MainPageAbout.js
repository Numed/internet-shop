import { WrapperElement } from "../About/About";
import beans from "../../img/sectionImg.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 520px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;

  color: #000000;

  @media (max-width: 470px) {
    margin-top: 25px;
  }
`;

const TextSection = styled.div`
  max-width: 580px;
  height: 100%;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;

      @media (max-width: 470px) {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 470px) {
      padding: 20px;
      font-size: 13px;
    }
  }

  @media (max-width: 470px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const MainPageAbout = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <WrapperElement>
        <hr />
        <img src={beans} alt="Beans" />
      </WrapperElement>
      <TextSection>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
        </p>

        <p>
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </TextSection>
    </Container>
  );
};

export default MainPageAbout;
