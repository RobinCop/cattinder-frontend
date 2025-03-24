import './App.css';
import CatCard from './components/CatCard';
import useCats from './hooks/useCats';



function App() {
  const cats = useCats();

  return (
    <div className="app">
      {cats.map((cat) => (
      <CatCard 
        name={cat.name} 
        imageBase64={cat.imageBase64} 
        description={cat.description}/>
      ))}
    </div>
  );
}

export default App;
