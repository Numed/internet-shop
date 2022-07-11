import React, { useState } from "react";
import styled from "styled-components";
import img from "../../img/cardImg.png";
import { Link } from "react-router-dom";

export const CardSection = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  max-width: 220px;
  min-height: 260px;
  padding: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  @media (max-width: 490px) {
    max-width: 100%;
    min-height: 100%;
  }
`;

export const CardText = styled.div`
  text-align: right;

  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }

  h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
`;

function CardList({ value, buttonValue }) {
  const [state] = useState([
    {
      id: 1,
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
    },
    { id: 2, name: "Kenya Coffee 1 kg", country: "Kenya", price: "6.99$" },
    {
      id: 3,
      name: "Coffee 1 kg",
      country: "Columbia",
      price: "6.99$",
    },
    {
      id: 4,
      name: "Brazil Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
    },
    {
      id: 5,
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
    },
    {
      id: 6,
      name: "Cheap Coffee 1 kg",
      country: "Brazil",
      price: "6.99$",
    },
  ]);

  const SelectCard = ({ value }) => {
    return state
      .filter((item) => item.name.includes(value))
      .map((item) => {
        return (
          <Card key={item.id}>
            <img src={img} alt={item.name} />
            <CardText>
              <h3>{item.name}</h3>
              <h3>{item.country}</h3>
              <h4>{item.price}</h4>
            </CardText>
          </Card>
        );
      });
  };

  const ViewAllCard = () => {
    return state.map((item, i) => {
      return (
        <Card key={item.id}>
          <Link to={`${item.country}`} style={{ textDecoration: "none" }}>
            <img src={img} alt={item.name} />
            <CardText>
              <h3>{item.name}</h3>
              <h3>{item.country}</h3>
              <h4>{item.price}</h4>
            </CardText>
          </Link>
        </Card>
      );
    });
  };

  const FindCardCountry = ({ buttonValue }) => {
    return state
      .filter((card) => card.country.includes(buttonValue))
      .map((item) => {
        return (
          <Card key={item.id}>
            <img src={img} alt={item.name} />
            <CardText>
              <h3>{item.name}</h3>
              <h3>{item.country}</h3>
              <h4>{item.price}</h4>
            </CardText>
          </Card>
        );
      });
  };

  const filterCard =
    buttonValue !== null && value === "" ? (
      <FindCardCountry buttonValue={buttonValue} />
    ) : null;
  const searchCard =
    value !== "" && buttonValue === null ? <SelectCard value={value} /> : null;
  const error =
    value !== "" && buttonValue !== null ? (
      <Card>
        <img
          style={{ width: 200 }}
          src="https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1"
          alt="Error 400"
        />
      </Card>
    ) : null;

  const content = value === "" && buttonValue === null ? <ViewAllCard /> : null;

  return (
    <CardSection>
      <Cards>
        {error}
        {filterCard}
        {searchCard}
        {content}
      </Cards>
    </CardSection>
  );
}

export default CardList;
