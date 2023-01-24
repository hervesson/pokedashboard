import { StyledButton } from './styles/buttons';
import { StyledParagraph, StyledTitle } from './styles/typography';
import Header from './components/Header';
import MainBanner from './components/MainBanner';


function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
    </div>
  );
}

export default App;
