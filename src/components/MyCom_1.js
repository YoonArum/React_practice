import './My_1.css'
import MyHello from './MyHello';


// export default의 경우 funtion 앞에 넣을 수 있음
//export default MyCom(){}
// 화살표 함수로 작성 가능
//const MyCom = () =>{}
function MyCom() {
    
  return (
    // root 밑에 h1,h2
    <>
    <div>
    {/* div 밑에 h1,h2 */}
    {/* <div>       */}
    {/* 속성값을 만들수 있음
    myhello 컴포넌트 에서 probs 매개변수 (object type)에 전달 */}
    <MyHello name='pnu' num='1' ck='1'/>
    <MyHello name='K-digital' num='2'/>
    <MyHello name='부산대' num='3'/>
    <h1>Hello</h1>
    <h2>React</h2>
    {/* </div> */}
    </div>
    </>
  );
}

export default MyCom;