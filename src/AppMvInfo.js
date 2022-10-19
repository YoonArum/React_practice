import './App.css';
import MvInfo from './project/MvInfo.js';
import MV from './jsondata/MvInfo.json';
import MyObject from './components/MyObject';

function App() {
  const mvinfo = MV.movieInfoResult.movieInfo;
    
  return (
    
    <>
  <MvInfo/>  
  {/* <MyObject/> */}
  </> 
    );
}

export default App;