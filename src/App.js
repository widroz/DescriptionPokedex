import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/header/Header";
import Searcher from "./components/searcher/Searcher";
import Bootstrap from "./components/style/Bootstrap";
import './styles.css'

function App() {

  //Settings
  const [currentGame, setCurrentGame] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [currentMode, setCurrentMode] = useState('');

  //Result of the search
  const [result, setResult] = useState(''); 


  useEffect(() => {
    //Each time game changes, automatically change to the only language available (English) if currentGame !== X or Y
    if (currentGame !== 'X ❌' && currentGame !== 'Y ✅') setCurrentLanguage("en")
  }, [currentGame])



  return (
    <div>
      <Bootstrap />
      <Header currentMode={currentMode} setCurrentLanguage={setCurrentLanguage} currentGame={currentGame} currentLanguage={currentLanguage} setCurrentGame={setCurrentGame} setCurrentMode={setCurrentMode}></Header>
      <Searcher currentGame={currentGame} currentLanguage={currentLanguage} result={result} setResult={setResult} currentMode={currentMode}></Searcher>
    </div>
  );
}



export default App;
