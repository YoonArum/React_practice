function MyHello(probs) {
//이부분이 함수의 내용을 작성할수 있는 부분
//console.log(probs.name);
console.log(probs['name']);


    return (      
        <div className='divHello'>
            <h1><span className="spanhello">{probs.name}</span></h1>
          {/* probs 조건부 랜더링 */}
            <h1><span className="numhello">{probs.num % 2==1 ?'홀수':'짝수'}</span></h1>
            <h2><span>{probs.ck|| '값없음'}</span></h2>
            <h2><span>{probs.ck ? "😊" : "🤢"}</span></h2>
        </div>
    );
}

export default MyHello;