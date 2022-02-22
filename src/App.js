import "./App.css";
import styled from "styled-components";
import { Calculator } from "./components/Calculator";

const AppPage = styled.div`
  background-color: lavender;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
function App() {
  return (
    <AppPage>
      <Calculator />
    </AppPage>
  );
}

export default App;
