import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/header/Header";
import Searcher from "./components/searcher/Searcher";
import Bootstrap from "./components/style/Bootstrap";
import './styles.css'
function App() {

  const [currentGame, setCurrentGame] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [result, setResult] = useState('');
  const [currentMode, setCurrentMode] = useState('');

  useEffect(() => {
    console.log("Current mode: " + currentMode)
}
, [currentMode])

  return (
    <div >
      <Bootstrap/>
      <Header currentMode={currentMode} setCurrentLanguage={setCurrentLanguage} currentGame={currentGame} currentLanguage={currentLanguage} setCurrentGame={setCurrentGame} setCurrentMode={setCurrentMode}></Header>
      <Searcher currentGame={currentGame} currentLanguage={currentLanguage} result={result} setResult={setResult} currentMode={currentMode}></Searcher>
      
    </div>
  );
}

export default App;
