import { StyledButton } from './styles/buttons';
import { StyledParagraph, StyledTitle } from './styles/typography';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <StyledTitle tag='h2' fontWeight={400} fontSize="sm">Pokedashboard</StyledTitle>
      <StyledParagraph fontSize="md">Esta é uma aplicação para o aprendizado de Styled Components</StyledParagraph>
      <StyledButton buttonSize='md' buttonStyle='outline'>Teste</StyledButton>
    </div>
  );
}

export default App;
