import {useEffect, useRef, useState} from "react";
import MvItem from "./MvItem";
import MvBox from "../jsondata/MvBox.json"


export default function MvList() {
    let mv = MvBox.boxOfficeResult.dailyBoxOfficeList;
    console.log(mv);
    //let mvs = mv.map((m) => <MvItem key={m.movieCd} item={m}/>);
    let cnt = 0;

    let [txt1, setTxt1] = useState([]);

    const eventtext = (event) => {
        event.preventDefault();

    }
    //state
    let [mvs,setMvs]= useState([]);

    //const 변수 선언
    const txtRef = useRef();

    //useEffect
    useEffect(()=>{
        txtRef.current.focus();
        
        setMvs(mv.map((m) => <MvItem key={m.movieCd} item={m}/>));
    },[]);    


    const handleClick = (e)=>{
        e.preventDefault();

        let tmp = [];
        for(let i = 0; i <mv.length;i++){
            if (mv[i].movieNm.includes(txtRef.current.value)){
                tmp.push(mv[i]);
            }
            setMvs(tmp);


          
        }
        
            let tep = mv.filter((m)=>
             m.movieNm.includes(txtRef.current.value));
            setMvs(tep.map((m)=>
            <MvItem key={m.movieCd}item={m}/>));
    };
    
    
    return (
        <div>
            <header>
                <div>박스 오피스</div>
            </header>
            
            <form className='mvform'>
                  <input type="text" ref={txtRef} placeholder='영화를 입력하시오'/>
                      <button type='submit'>등록</button>
                      <button type= 'reset'>취소</button>                    
              </form>
            
            {mvs}
        </div>
    );
}