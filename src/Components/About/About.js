import styled from "styled-components";
import img from "../../img/OurCoffe/sectionPhoto.jpg";
import beans from "../../img/sectionImg.png";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100;
  margin: 70px 0;
  position: relative;

  hr:last-child {
    position: absolute;
    top: 100%;
    left: 41%;
    height: 2px;
    background-color: #000;
    min-width: 240px;
    font-weight: 700;
    max-width: 240px;

    @media (max-width: 580px) {
      left: 30%;
    }

    @media (max-width: 500px) {
      left: 25%;
    }

    @media (max-width: 375px) {
      left: 15%;
    }

    @media (max-width: 325px) {
      left: 12%;
    }
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  @media (max-width: 580px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const ImgSection = styled.div`
  margin-right: 80px;
  min-height: 355px;

  img{
    @media (max-width: 675px) {
        width: 90%:
      }
  }

  @media (max-width: 675px) {
    min-height: 0;
    margin: 0 25px;
  }
`;

export const TextSection = styled.div`
  min-height: 340px;
  text-align: center;
`;

export const WrapperElement = styled.div`
  position: relative;
  min-height: 50px;
  margin: 20px auto;
  display: flex;
  min-width: 200px;
  max-width: 200px;
  justify-content: center;
  align-items: center;

  hr {
    background-color: #000;
    height: 2px;
    width: 100%;
    font-weight: 700;
  }

  img {
    padding: 0 20px;
    position: absolute;
    background-color: #fff;
  }
`;

export const ParagrahContainer = styled.div`
  max-width: 345px;
  max-height: 235px;

  @media (max-width: 675px) {
    padding: 5px;
  }
`;

export const Paragrah = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 25px;
  color: #000000;
`;

function About() {
  return (
    <Section>
      <SectionInner>
        <ImgSection>
          <img src={img} alt="Girl with coffe" />
        </ImgSection>
        <TextSection>
          <h2>About our beans</h2>
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
              Last ask him cold feel met spot shy want. Children me laughing we
              prospect answered followed. At it went is song that held help
              face.
            </Paragrah>
          </ParagrahContainer>
        </TextSection>
      </SectionInner>
      <hr />
    </Section>
  );
}

export default About;
