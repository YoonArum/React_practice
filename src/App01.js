import './App01.css';
import MyCom from './components/MyCom';

function App() {

  let mv = [{
    "rnum": "1",
    "rank": "1",
    "rankInten": "1",
    "rankOldAndNew": "OLD",
    "movieCd": "20198317",
    "movieNm": "인생은 아름다워",
    "openDt": "2022-09-28",
    "salesAmt": "161663671",
    "salesShare": "14.6",
    "salesInten": "451167",
    "salesChange": "0.3",
    "salesAcc": "6548124611",
    "audiCnt": "17910",
    "audiInten": "261",
    "audiChange": "1.5",
    "audiAcc": "685344",
    "scrnCnt": "829",
    "showCnt": "2534"
  },
  {
    "rnum": "2",
    "rank": "2",
    "rankInten": "-1",
    "rankOldAndNew": "OLD",
    "movieCd": "20215601",
    "movieNm": "공조2: 인터내셔날",
    "openDt": "2022-09-07",
    "salesAmt": "147988846",
    "salesShare": "13.3",
    "salesInten": "-38522666",
    "salesChange": "-20.7",
    "salesAcc": "68148142496",
    "audiCnt": "17727",
    "audiInten": "-1260",
    "audiChange": "-6.6",
    "audiAcc": "6642615",
    "scrnCnt": "780",
    "showCnt": "2337"
  },  
]

const mvs = mv.map((m) => 
<MyCom key={m+m.movieCd} item={m}/>
);
 

  let cnt = 0;
  return (
  <>
  <header>
        <div>박스 오피스</div> 
  </header>
  <table>
        <thead>
          <tr>
            <td></td>
            <td>영화명</td>
            <td>매출액</td>
            <td>관객수</td>
            <td>애매율</td>
            <td>영화코드</td>
          </tr>
        </thead>
        <tbody>
        </tbody>      
          {mvs}
          
  </table>  
  </>
  );
}

export default App;