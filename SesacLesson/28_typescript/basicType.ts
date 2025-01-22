let num: number = 1;
num = 2;
// num = "ssss" //number 형 변수에 string 타입을 할당하려고 해서
console.log(num);

let str1: string = 'str';
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array 선언
let numArr: number[] = [1, 2, 3, 10, 11];
let strArr: Array<string> = ['a', 'b', 'c', 'd', 'e'];

let arr1: (number | string)[] = [1, 2, 3, 'a', 'b', 'c'];
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2]];
let arr3: any[] = [1, 2, 'a', [], {}, null, true];

// object
let obj1: object = {
  name: 'aa',
};

// 타입스크립트는 알아서 타입추론을 한다.
// 암목적 타입 지정
let aa = 5; //aa를 선언하는 순간 암목적으로 number 형으로 지정
let bb = 'hello';

// aa= "ddd" //err! 숫자형에 문자열 대입 불가능!
