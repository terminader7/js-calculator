import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  color: green;
  font-family: helvetica;
`;

const SecondaryTitle = styled(Title)`
  color: red;
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Title>no.1 heimerdinger NA</Title>
      <SecondaryTitle>Angular is bad lel</SecondaryTitle>
    </div>
  );
}

export default App;
