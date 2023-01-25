import Header from './components/Header';
import MainBanner from './components/MainBanner';
import GameList from './components/GameList';
import MyGamesList from './components/MyGameList';


function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <GameList />
      <MyGamesList />
    </div>
  );
}

export default App;
