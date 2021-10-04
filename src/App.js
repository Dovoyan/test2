import logo from './logo.svg';
import './App.css';
import Description from './components/Description/Description';
import SongList from './components/SongList/SongList';

function App() {
  return (
    <div className="App">
      <Description />
      <SongList />
    </div>
  );
}

export default App;
