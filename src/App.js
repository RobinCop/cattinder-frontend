import './App.css';
import useCats from './hooks/useCats';
import CatSwiper from './features/CardSwiper';


function App() {
  const {cats,submitSwipeResults} = useCats();

  return (
    <div className="app">
      <CatSwiper cats={cats} submitSwipeResults={submitSwipeResults}/>
    </div>
  );
}

export default App;
