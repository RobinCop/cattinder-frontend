import './App.css';
import useCats from './hooks/useCats';
import CatSwiper from './features/CatSwiper';


function App() {
  const cats = useCats();

  return (
    <div className="app">
      <CatSwiper cats={cats} />
    </div>
  );
}

export default App;
