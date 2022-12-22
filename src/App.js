import './App.css';
import ButtonBar from './Components/ButtonBar';
import Gallery from './Components/Gallery';
import { useState, useEffect } from 'react';

function App() {
  let [artId, setArtId] = useState(45734)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId])

const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}
  return (
    <div className="App">
      <Gallery primaryImage={data.primaryImage} 
      title={data.title} 
      artist={data.artistDisplayName} 
      medium={data.medium}/>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
