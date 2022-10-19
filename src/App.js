import './App.css';
import MvInfo from './project/MvInfo.js';
import MV from './jsondata/MvInfo.json';
import MyObject from './components/MyObject';
import App01 from './App01'
import MvList from './project/MvList';

function App() {
    const mvinfo = MV.movieInfoResult.movieInfo;
    return (
    <> 
    < MvList /> 
    {/* <App01/>   */ } 
    {/* <MvInfo/>   */} 
    {/* <MyObject/> */}  
    </> 
    );
}

export default App;