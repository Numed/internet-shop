import solimo from "../../img/MainPage/solimo.png";
import presto from "../../img/MainPage/presto.png";
import img from "../../img/cardImg.png";
import bestItem from "../../img/MainPage/bestItems.jpg";
import { CardText, Card } from "../CardList/CardList";
import styled from "styled-components";
import { Title } from "../MainPageAbout/MainPageAbout";

const Container = styled.div`
  box-shadow: 1px 0 4px 0 rgba(0, 0, 0, 0.65);
  width: 100%;
  min-height: 500px;
  background: url(${bestItem}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justif-content: center;
  align-items: center;
  padding: 90px 0;
`;

const Cards = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const CardContainer = styled(Card)`
  cursor: default;
  background: rgba(255, 255, 255, 0.65);
  margin-top: 20px;
  }
`;

const BestItems = () => {
  return (
    <Container>
      <Title>Our best</Title>
      <Cards>
        <CardContainer>
          <img src={solimo} alt="Solimo Coffee Beans 2 kg" />
          <CardText>
            <h3>Solimo Coffee Beans 2 kg</h3>
            <h4>10.73$</h4>
          </CardText>
        </CardContainer>
        <CardContainer>
          <img src={presto} alt="Presto Coffee Beans 1 kg" />
          <CardText>
            <h3>Presto Coffee Beans 1 kg</h3>
            <h4>15.99$</h4>
          </CardText>
        </CardContainer>
        <CardContainer>
          <img src={img} alt="AROMISTICO Coffee 1 kg" />
          <CardText>
            <h3>AROMISTICO Coffee 1 kg</h3>
            <h4>6.99$</h4>
          </CardText>
        </CardContainer>
      </Cards>
    </Container>
  );
};

export default BestItems;
