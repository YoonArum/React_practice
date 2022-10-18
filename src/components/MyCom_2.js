import './My_2.css'
import MyHello from './MyHello';


function MyCom() {
  // 스타일 object를 생성
  const styleobj = {
    color :'white',
    backgroundColor : 'blue',
    padding : '20px',
    textAlign : 'center',
    fontSize : '30px',

  }
      return (
        <>
        <h1>스타일 변경 예제</h1>
        {/*
        인라인 스타일은 오브젝트 타입으로
        바깥 {}는 jsx의 표현식을 위한 {}이고
        안쪽 {}는 자바스크립트의 object 타입 표시
         */}
        <p 
        style={{
          color : 'red',
          backgroundColor : 'black',
          padding : '50px',
          textAlign : 'center',
          fontSize : '20px',
        }}>
          리액트에서 스타일 변경 - 인라인형식
           </p>

           <p style={styleobj}>
            리액트에서 스타일 변경 - 인라인형식으로 변수 사용
           </p>

           <p>
            css 스타일 변경
           </p>
        </>


  );
}

export default MyCom;