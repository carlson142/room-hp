import styled from "styled-components";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Slider />
      <About />
    </Container>
  );
}

export default App;
