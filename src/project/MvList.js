import {useEffect, useRef, useState} from "react";
import MvItem from "./MvItem";
import MvBox from "../jsondata/MvBox.json"

export default function MvList() {
    let mv = MvBox.boxOfficeResult.dailyBoxOfficeList;
    console.log(mv);
    const mvs = mv.map((m) => <MvItem key={m.movieCd} item={m}/>);
    let cnt = 0;

    let [txt1, setTxt1] = useState([]);

    const eventtext = (event) => {
        event.preventDefault();

    }

    return (
        <div>
            <header>
                <div>박스 오피스</div>
            </header>
            <div>영화명 입력</div>
            <form onSubmit={eventtext}>
                <input type="text" placeholder="영화명"/>
                <button type="submit">확인</button>
                <button type="reset">확인</button>
            </form>
            
            {mvs}
        </div>
    );
}