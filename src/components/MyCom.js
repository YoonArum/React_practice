import './My.css'

//useState Hook 사용
import {useState} from 'react';

function MyCom(probs) {
  const myMv = {...probs.item}

  // let arr = [1,2,3];
  // arr =arr.map[(item)=>item*2]
  
  // let cnt = 0;  
  
  let [cnt, setCnt] = useState(0) ;

  const lis = Object.entries(myMv).map((item) =>
  (  
    <li key={item[0]}>
    <span className='mvLik'> {item[0]}</span>
    <span className='mvLik2'>{item[1]}</span>
    </li>
    )
  );

  const keys = ['rank','movieNm','salesAmt','audiCnt','audiInten','movieCd'];

  // 
  //const lis1 = keys.map((k)=><li key= {k}>{myMv[k]}</li>)
  
  //순위 rank 
  //영화명 movieNm
  //매출액 salesAmt
  //관객수 audiCnt
  //예매율 audiInten
  //영화코드 movieCd

  
  

  const upCnt = () => {
    setCnt(++cnt);
    console.log(cnt);
  }
  
// console.log(Object.entries(myMv))    
 // console.log(Object.entries(myMv[0]))    
    return (
      <> 
      
      <ul>        
        <li className='rank'>{myMv.rank}</li>
        <li>{myMv.movieNm}</li>
        <li>{myMv.salesAmt}</li>
        <li>{myMv.audiCnt}</li>
        <li>{myMv.audiInten}</li>
        <li>{myMv.movieCd}</li>      
      </ul>
      <div>
  {/* <span onClick={()=>{
    cnt++;
    console.log(cnt);
  }}> */}
     <span onClick={upCnt}>❤️</span>
        <span>{cnt}</span>    
  </div>  

        
      
      </>
  );
}

export default MyCom;