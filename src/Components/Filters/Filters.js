import { useState } from "react";
import styled from "styled-components";
import CardList from "../CardList/CardList";

const Section = styled.section`
  margin: 60px auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  flex: 0 auto;

  .wrapperFilters {
    display: flex;
    width: 55%;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1200px) {
      width: 100%;
    }
    @media (max-width: 675px) {
      flex-direction: column;
    }
  }
`;

const SearchInput = styled.input`
  background: #fff;
  border-radius: 4px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 12px;
  margin-left: 20px;
  line-height: 17px;
  padding: 3px 8px;
  border: none;
  cursor: pointer;

  @media (max-width: 355px) {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 675px) {
    margin-bottom: 20px;
  }

  @media (max-width: 355px) {
    flex-direction: column;
  }

  &:last-child() {
    @media (max-width: 355px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  label {
    margin-bottom: 10px;
  }
`;

const ButtonsContainer = styled.div`
  margin-left: 30px;
  button {
    background: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px 0px 0px 4px;
    margin-right: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #000000;
    padding: 7px 22px;
    border: none;
    cursor: pointer;
  }
`;

function Filters() {
  const [value, setValue] = useState("");
  const [buttonValue, setButtonValue] = useState(null);

  const handelClick = (event) => {
    setButtonValue(event.target.value);
  };

  return (
    <Section>
      <div className="wrapperFilters">
        <SearchContainer>
          <label htmlFor="search">Lookiing for</label>
          <SearchInput
            type="search"
            id="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="start typing here..."
          />
        </SearchContainer>
        <SearchContainer>
          <label htmlFor="search">Or filter</label>
          <ButtonsContainer>
            <button value="Brazil" onClick={(e) => handelClick(e)}>
              Brazil
            </button>
            <button value="Kenya" onClick={(e) => handelClick(e)}>
              Kenya
            </button>
            <button value="Columbia" onClick={(e) => handelClick(e)}>
              Columbia
            </button>
          </ButtonsContainer>
        </SearchContainer>
      </div>
      <CardList value={value} buttonValue={buttonValue} />
    </Section>
  );
}

export default Filters;
