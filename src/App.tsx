

import { StyledParagraph, StyledTitle } from './styles/typography';


function App() {
  return (
    <div className="App">
      <StyledTitle tag='h2' fontWeight={400} fontSize="sm">Pokedashboard</StyledTitle>
      <StyledParagraph fontSize="md">Esta é uma aplicação para o aprendizado de Styled Components</StyledParagraph>
    </div>
  );
}

export default App;
