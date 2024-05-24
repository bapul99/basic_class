//함수 : 어떤 처리를 반복적으로 수행하도록 만들어진 코드 블록
//함수를 사용하는 이유 : 코드의 재사용성을 높이기 위해
//함수를 사용하는 방법 : 함수를 정의하고 호출
//함수를 정의하는 방법 : function 키워드를 사용

function 함수이름() {
    //함수가 호출되었을 때 실행할 코드
    console.log("함수가 호출되었습니다.")
}

const 화살표_함수 = () => {
    console.log("함수가 호출되었습니다.")
}

//함수를 호출하는 방법 -> 함수명()

함수이름(); //함수가 호출되었습니다.
화살표_함수(); //함수가 호출되었습니다.

// 대부분 () 있으면 함수다! 라고 생각하면 됨

function 값을_입력_받는_함수(값1, 값2) {
    console.log(값1 + 값2)
}
//값1, 값2 에 1, 2를 넣어서 더한 값을 출력
값을받는_함수(1, 2) //3

//void 함수 : 반환값이 없는 함수
const 함수처리후_받은값 = 값을_입력_받는_함수(1, 2)
console.log("함수처리후_받은값", "함수처리후_받은값") //함수처리후_받은값 undefined

function 값을_반환_하는_함수(값1, 값2) {
    return 값1 + 값2
}
const 함수처리후_받은값2 = 값을_반환_하는_함수(1, 2)
console.log("함수처리후_받은값2", 함수처리후_받은값2) //함수처리후_받은값2 3

function void_함수() {
    return undefined
}
console.log(void_함수()) //undefined

// 함수는 단순하게 만든다 -> 한가지 일만 하도록 만든다!

function 영화_목록_가져오기() {
    // api 영화를 가져온다
    // 정제한다
    // 화면 표기한다.
}

// 위 코드를 아래와 같이 나누어서 작성하는 것이 좋다.

function getMoviesFrom() {
    // api 영화를 가져온다
}

function refineMovies() {    
    // 정제한다
}       

function displayMovies() {
    // 화면 표기한다.
}

// 화살표 함수 축약형 
const 화살표함수 = (값1) => {
    const 변경된값 = 값1 * 10
    return 변경된값 
}

const 화살표함수_축약형 = 값1 => 값1 * 10
// return 문이 한줄인 경우 중괄호와 return 키워드를 생략할 수 있다.
// 인자가 하나인 경우 인자를 감싸는 괄호를 생략할 수 있다.

console.log("화살표함수", 화살표함수(12)) // 120
console.log("화살표함수_축약형", 화살표함수_축약형(12)) // 120

// callback 함수 : 함수를 인자로 전달받아 실행하는 함수
function 함수1(변수){
    console.log("hello world") 
    변수() //함수인_변수() 와 같다.
}

const 함수인_변수 = () => {
    console.log("goodbye world")
}

console.log("함수1", 함수1(함수인_변수)) // hello world, goodbye world

함수1("11111") // hello world, 11111
함수1(함수인_변수) // hello world, goodbye world
// 함수 1 실행 -> 내부에서 hello world 출력 -> 함수인_변수() 실행 -> goodbye world 출력