//useState Hook 사용
import {useState} from 'react';

function MvItem(probs) {
    const myMv = {
        ...probs.item
    }

    // let arr = [1,2,3]; arr =arr.map[(item)=>item*2] let cnt = 0;

        
    let [cnt, setCnt] = useState(0);
    let [dspflag, setDspFlag] = useState(0);

    const lis = Object
        .entries(myMv)
        .map((item) => (
            <li key={item[0]}>
                <span className='mvLik'>
                    {item[0]}</span>
                <span className='mvLik2'>{item[1]}</span>
            </li>
        ));

    const keys = [
        'rank',
        'movieNm',
        'salesAmt',
        'audiCnt',
        'audiInten',
        'movieCd'
    ];

    //
    // const lis1 = keys.map((k)=><li key= {k}>{myMv[k]}</li>) 순위 rank 영화명 movieNm
    // 매출액 salesAmt 관객수 audiCnt 예매율 audiInten 영화코드 movieCd

    const upCnt = () => {
        setCnt(++cnt);
        console.log(cnt);
    }

    const handleShow = () => {
        setDspFlag('inline-flex');
    }
    const handleShowOut = () => {
        setDspFlag('none');
    }

    // console.log(Object.entries(myMv)) console.log(Object.entries(myMv[0]))
    return (
        <div>

            <ul className='Mvul'>
                <li className='rank'>{myMv.rank}</li>
                <li>{myMv.movieNm}</li>
                <span onClick={upCnt}>❤️</span>
                <span>{cnt}</span>
            </ul>
            <div>
                {/* <span onClick={()=>{
    cnt++;
    console.log(cnt);
  }}> */
                }
            </div>
            <div className='mainDiv2' onMouseEnter={handleShow} onMouseLeave={handleShowOut}>
                <span style={{'display' : dspflag}}>                                
                </span>
            </div>
        </div>
    );
}

export default MvItem;