import './My.css'

function MyCom() {
    //object 생성
    let obj = new Object();
    //console.log('obj', obj);

    //object 생성2
    let obj2 = {};
    //console.log('obj2', obj2);

    //obect 생성3
    let mv = {
        "rnum": "1",
        "rank": "1",
        "rankInten": "0",
        "rankOldAndNew": "OLD",
        "movieCd": "20215601",
        "movieNm": "공조2: 인터내셔날",
        "openDt": "2022-09-07",
        "salesAmt": "186527512",
        "salesShare": "23.2",
        "salesInten": "-645733705",
        "salesChange": "-77.6",
        "salesAcc": "68000199650",
        "audiCnt": "18989",
        "audiInten": "-61139",
        "audiChange": "-76.3",
        "audiAcc": "6624892",
        "scrnCnt": "979",
        "showCnt": "3048"
    }
    //console.log('object 생성 )
    //console.log(mv);
    //console.log('영화명', mv.movieNm);
    //console.log('영화명', mv['movieNm']);

    //Object 순회
    for (let k in mv) {
        //console.log(k, mv[k]);
        if (k === 'movieNm') 
            break;
        }
    
    for (let [k, v] of Object.entries(mv)) {
        //console.log(k, v);
        if (k === "movieNm") 
            break;
        }
    
    //얕은 복사
    obj = mv;
    //console.log("얕은 복사 : ",obj);
    
    //깊은 복사
    obj2 = {...mv};
    //console.log("깊은 복사 (전개 연산자 ... 사용) : ",obj2);

    //mv object 내용 변경
    //mv.movieNm = "공조2_얕은";
    //console.log("얕은 복사 : obj ",obj);
    //console.log("얕은 복사 : mv ",mv);
    //초기화
    //mv.movieNm = "공조2: 인터내셔날";
    //mv.movieNm = "공조2_깊은";
    //console.log("깊은 복사 (전개 연산자 ... 사용) : ",obj2);
    //console.log("깊은 복사 : mv ",mv);

    let lis = [];
    

    for (let [k, v] of Object.entries(mv)) {
      //console.log(k, v);
      lis.push(<li key={k}>
        <span className='mvLik'> {k}</span>
        <span className='mvLik2'>{v}</span>
        </li>)
    }      

    return (
      
      <>
      <h1>
        object 타입 연습
        <ul>
          {lis}
        </ul>
      </h1>
      </>
  );
}

export default MyCom;