// 1. Date 객체
let now = new Date()
console.log(now)
console.log(new Date("September 30, 1990 13:00:00"))

// 1970.01.01 00:00:00 초 이후로 몇 초나 지났는지!
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010, 2, 2))
console.log(new Date(2010, 2, 2, 18,35,50))

console.log(now.getFullYear(),'년')
console.log(now.getMonth(),'월') // (0 ~ 11)
console.log(now.getDate(),'일') // 1 ~ 
console.log(now.getHours(), '시') // 0 ~ 23
console.log(now.getMinutes(), '분') // 0 ~ 59
console.log(now.getSeconds(), '초') // 0 ~ 59
console.log(now.getMilliseconds(), '밀리초') // 0 ~ 999
console.log(now.getDay(), '요일') // 0 ~ 6 (일 ~ 토)

// 퀴즈 (~ 14:22)
// 조건문을 사용해서 오늘이 주말인지 평일인지 출력
// if, switch, 삼항연산자 모두 가능
const checkDay = now.getDay()===0||now.getDay()===6?'주말':'평일'
console.log(checkDay)

// 2. Math 객체
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2) // 루트2 값

console.log(Math.min(50,10,1,2,3,4,0,-5)) // 최소값
console.log(Math.max(50,10,1,2,3,4,0,-5)) // 최대값
console.log(Math.random()) // 0<= x <1
console.log(Math.round(5.3)) // 소수 > 정수로 반올림
console.log(Math.floor(5.3)) // 소수 > 정수로 버림
console.log(Math.ceil(5.3)) // 소수 > 정수로 올림

// Math.random 응용!
// 0 ~ 9까지의 소수가 아닌 난수
// 0<= x <1
console.log('난수1:',Math.floor(Math.random()*10))

// 1 ~ 10 까지의 자연수 난수
// 0<= x <=9
console.log('난수2:',Math.floor(Math.random()*10)+1)

// 20 ~ 22 까지의 난수
// 0 <= x < 1
// 0 <= x < 3
// 20 <= x < 23
console.log('난수3:',Math.floor(Math.random()*3)+20)

const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
    area:'ff'
};

// object의 key만 가져와서 배열로 반환
let key = Object.keys(areaNum)

// object의 value만 가져와서 배열로 반환
let value = Object.values(areaNum)

console.log(key)
console.log(value)