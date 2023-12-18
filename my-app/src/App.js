//Js에서는 글자값인지 숫자값인지
//중요하지 않음
// 재사용이 가능한지 재할당이 가능한지 가 중요

// var : 재할당 재선언 가능 // 밑에서 안된 error 예제 모두 가능
// let : 재선언은 하지 못하지만 재할당은 가능
let count = 0;
count = 1;
// let count = 2; //불가
// const : 재선언 재할당 둘다 불가
  //한 번 선언하면 다시 값을 변경하거나 수정할 수 없음
const msg = "hihi";
//msg = "aa"; 
//msg에 다른 값을 넣고 싶어서 추가로 값 변경을 하려하면
  // error 발생함

function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다.</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <HiComponent />
      <HiComponent />
      <HiComponent />
      <HiComponent />
      <HiComponent />
    </div>
  );
}

export default App;

// export default : 다른 파일에서 사용할 수 있도록 
//내보내는 부분
// 기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 Js 에서 App.js에 있는 function App을 사용할 수 있도록
//내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함






