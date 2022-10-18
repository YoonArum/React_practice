import MV from '../jsondata/MvInfo.json';
import './Mv.css';
import {useEffect, useReducer, useState} from 'react';
import MvTimer from './MvTimer';

function MvInfo() {
    //json 데이터 가져오기
    const mvinfo = MV.movieInfoResult.movieInfo;
    //console.log(mvinfo); 화면에 출력할 정보를 오브젝트 생성
    let myinfo = {};
    const key1 = ['movieNm', 'movieCd', 'openDt', 'prdtStatNm', 'showTm']
    const key2 = ['audits', 'nations', 'directors', 'genres', 'companys']
    const keys = {
        'movieNm': '영화이름',
        'movieCd': '영화코드',
        'openDt': '개봉일',
        'prdtStatNm': '개봉상태',
        'showTm': '상영시간',
        'audits': '등급',
        'nations': '언어',
        'directors': '감독',
        'genres': '장르',
        'companys': '배급사'
    };

    //key1에 해당하는 값 추출

    for (let k of key1) {
        myinfo[keys[k]] = mvinfo[k];
    }

    //key2에 해당한는 값 추출 : 배열에서 추출
    for (let k of key2) {
        switch (k) {
            case 'audits':
                myinfo[keys[k]] = mvinfo[k].map((item) => item.watchGradeNm);
                break;
            case 'nations':
                myinfo[keys[k]] = mvinfo[k].map((item) => item.nationNm);
                break;
            case 'directors':
                myinfo[keys[k]] = mvinfo[k].map((item) => item.peopleNm);
                break;
            case 'genres':
                myinfo[keys[k]] = mvinfo[k].map((item) => item.genreNm);
                break;
            default:
                mvinfo[k] = mvinfo[k].filter((item) => item.companyPartNm === '배급사')
                myinfo[keys[k]] = mvinfo[k].map((item) => item.companyNm);
                break;
        }
    }

    // console.log()
    // console.log(myinfo);
    //화면에 출력할 내용을 jsx로 만들기

    let lis = [];
    for (let [k, v] of Object.entries(myinfo)) {
        lis.push(<li key={myinfo.movieCd = k}>
            <span>{k}</span>
            <span>{v}</span>
        </li>);
    }

    //count 제어
    let [cntup, setCntup] = useState(0) ;
    let [cntdown, setCntdown] = useState(0) ;
    let [fleg, setfleg] = useState(true);

    const handTimer = () => {
        setfleg(!fleg);
        // setfleg2(fleg2 === 'none' ? 'inline-flex' : 'none');
    }

    
    const handleup = () => {
      setCntup(++cntup);
      console.log(cntup)
    }
    const handledown = () => {
      setCntdown(++cntdown);
    }

    //useEffect Hook 랜더링시 매번 발생
    //재 랜더링시 계속 수행
    useEffect(()=>{
      console.log("useEffect 랜더링 발생시 계속 수행");
    });

    //useEffect Hook : 관련 state변수가 변경될떄 실행
    useEffect(()=>{
      console.log("useEffect 랜더링 생성 한번 실행");
    },[cntup]);
    
    

       



    return (
        <div>
            <h1>영화 상세</h1>
            <ul>
                {/* <li><span>영화명</span>{mvinfo.movieNm}</li>
          <li><span>영화코드</span>{mvinfo.movieCd}</li>
          <li><span>개봉일자</span>{mvinfo.openDt}</li>
          <li><span>제작상태</span>{mvinfo.prdtStatNm}</li>
          <li><span>상영시간</span>{mvinfo.showTm}</li>
          <li><span>관람등급</span>{}</li>
          <li><span>상영시간</span></li>
          <li><span>제작국가</span></li>
          <li><span>감독</span></li>
          <li><span>장르</span></li>
          <li><span>배급사</span></li> */
                }

                {lis}
                <li>
                  <span onClick={handleup}>👍</span>
                <span>{cntup}</span>
                <span onClick={handledown}>🤞</span>
                <span>{cntdown}</span>            
                  </li>
                  <li></li>
            </ul>
            {/* <div className='mvList3' style={{'display':fleg2}}><MvTimer/></div> */}


        </div>
    );
}

export default MvInfo;