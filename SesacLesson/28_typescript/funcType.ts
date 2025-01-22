function jsPrint(a: number, b: number, c: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

jsPrint(1, 2, 3);

function concatStr(a: string, b: number): string {
  return a + b;
}

function circleArea(r: number): number {
  return r * r * Math.PI;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

// return 키워드 없는 리턴
const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

// 함수 호출!
console.log('원의 넓이', circleArea(5));
console.log('사각형넓이 ' + squareArea(3, 4));
console.log(`삼각형 넓이 ${triangleArea('5', '6')}`);

function goingOn(): never {
  while (true) {
    console.log('go');
  }
}
// goingOn(); // 끝나지 않는 함수

//   오버로딩
//  -함수에서 매개변수의 개수, 타입 / 반환 타입이 다를 때
//  - 같은 함수의 이름으로 매개변수의 종류의 개수를 다르게 선언 가능
//  비슷한 기능일 때만 사용가능

function add(x: string, y: string): string;
function add(x: number, y: number): number;

// 오버로딩 함수 구현
function add(x: any, y: any) {
  return x + y;
}

console.log(add(1, 2));
console.log(add('1', '2'));
// console.log(add("1",2)) //호출 불가능
