import mv from '../jsondata/MvInfo.json'


function MyObject(){  
  //Object 순회 : 키값 가져오기

  // for(let k in mv){
  //   console.log('키 : ' + k);
  //   console.log('값 : ' + mv[k]);

  //   for(let chk in mv[k]){
  //     console.log('키2 : ' + chk);
  //     console.log('값2 : ' + mv[k][chk]);
  //   }
  // }

  //영화정보 추출
  const myinfo = mv.movieInfoResult.movieInfo;
  console.log(myinfo);

  //Object 순회
  // for(let k in myinfo){
  //   console.log('키 : '+k);
  // }
  
  //Object.entreies(오브젝트명) : 키와 값의 배열의 배열로 반환
  // console.log(Object.entries(myinfo))

  //item은 배열
  // for(let item of Object.entries(myinfo)){
  //   console.log(item);
  // }

  // for(let [k,v] of Object.entries(myinfo)){
  //   console.log(k+v);
  // }

  //배열 생성
  const com = myinfo.companys;
  console.log(com);
  
  //map(() => {}): 배열의 항목을 가지고 와서 새로운 배열 형성
  const mcom = com.map(
    (item)=>
    item.companyNm +'('+item.companyPartNm+')'
    )
  console.log(mcom);

  //filter(()=>{}) : 배열의 항목을 가지고 와서 조건에 맞는 항목으로 새로운 배열 생성
  const fcom = com.filter(
    (item) =>
    item.companyPartNm === '배급사'
  )
  console.log(fcom);

  const actors = myinfo.actors
  
const lis = actors.map(
    (item) =>
    <li key={item.cast.replace(' ','') + item.peopleNm}> + {item.cast} </li>
  );
  console.log(lis);


  return(
<>
    <h1>오브젝트 연습</h1>
    
{/* {lis} */}
</>
  );
}
export default MyObject;