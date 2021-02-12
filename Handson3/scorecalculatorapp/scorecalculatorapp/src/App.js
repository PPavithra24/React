import logo from './logo.svg';
import './App.css';

import {CalculateScore} from '../src/Components/CalculateScore'

function App() {
  return (
    <div className="App">
     <CalculateScore Name={"POTATI PAVITHRA"}
     School={"ST MARKS HIGH SCHOOL"}
     total={989}
     goal={6}
     />
    </div>
  );
}

export default App;
