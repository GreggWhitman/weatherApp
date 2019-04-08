import styled from "styled-components";

const WeatherIcon = styled.img``;

const WeatherRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TheTemp = styled.div`
  font-size: 1.4em;
`;

const StyledMiniWeather = styled.div`
  margin: 0.5rem;
`;

const Title = styled.header`
  font-size: 1.2em;
  white-space: nowrap;
`;

const Forecast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const WeatherWrapper = styled.div`
  flex-basis: 210px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  > *:last-child {
    margin-left: 4px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const LocationButton = styled.button`
  font-size: 24px;
  line-height: 1;
  padding: 8px 8px 7px;
  border: 2px solid ${({ theme }) => theme.color.border};
  color: ${({ theme, active }) =>
    active ? theme.color.active : theme.color.text};
  background-color: transparent;
  transition: color 0.2s ease-in, color 0.2s ease-out;
  :hover {
    color: ${({ theme, active }) =>
      active ? theme.color.text : theme.color.active};
  }
`;

const StyledInput = styled.input`
  padding: 6px 8px;
  line-height: 28px;
  border: 2px solid ${e => e.theme.color.border};
  font-size: 24px;
  color: ${e => e.theme.color.text};
  background-color: transparent;
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > * {
    border: none;
    border-left: 2px solid ${e => e.theme.color.border};
    border-right: 2px solid ${e => e.theme.color.border};
    :last-child {
      border-bottom: 2px solid ${e => e.theme.color.border};
    }
  }
`;

const Option = styled.button`
  text-align: center;
  font-size: 2em;
  color: ${e => e.theme.color.text};
  background-color: transparent;
  transition: color 0.2s ease-in, color 0.2s ease-out;

  :hover {
    color: ${e => e.theme.color.active};
  }
`;

export {
  StyledMiniWeather,
  WeatherRow,
  Title,
  WeatherIcon,
  TheTemp,
  Forecast,
  WeatherWrapper,
  SearchWrapper,
  SearchBar,
  LocationButton,
  StyledInput,
  OptionList,
  Option
};
