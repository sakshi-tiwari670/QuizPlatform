import logo from './logo.svg';
import './App.css';
import Quiz from "./components/Quiz"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import PlayQuiz from './components/PlayQuiz';
import Result from './components/Result';
import {app} from './firebase-config.js'
function App() {
  
  return (
    <div>
    
    <Routes>
      <Route exact path='/' element={<Quiz/>}/>
      <Route exact path='/play' element={<PlayQuiz/>}/>
      <Route exact path='/results' element={<Result/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
