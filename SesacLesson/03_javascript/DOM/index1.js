console.log(document)
console.log(document.URL)
console.log(document.documentElement)

console.log(document.head)
console.log(document.body)
console.log(document.title)

/* 1. getElementById */
console.log(document.getElementById('green'))
console.log(document.getElementById('red'))

/* 2. getElementsByClassName */
console.log(document.getElementsByClassName('pink'))
console.log(document.getElementsByClassName('pink')[0])
console.log(document.getElementsByClassName('others'))
console.log(document.getElementsByClassName('others')[0])

/* 3. getElementsByTagName */
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByTagName('div')[0])

/* 4. getElementsByName (name 속성값) */
console.log(document.getElementsByName('id'))
console.log(document.getElementsByName('id')[0])

/* 5. querySelector('CSS 선택자') */
console.log('----')
console.log(document.querySelector(".pink"))
console.log(document.querySelector(".others"))
console.log(document.querySelector("#green"))
console.log(document.querySelector("#red"))
console.log(document.querySelector("div"))
console.log(document.querySelector("input"))
console.log(document.querySelector("[name='id']"))

/* 6. querySelectorAll */
console.log(document.querySelectorAll('.pink'))
console.log(document.querySelectorAll('#red'))
console.log('--- 간단 실습 ---')
let pinks = document.querySelectorAll('.pink')
for(let tag of pinks){
    console.log(tag)
}
// for of 을 이용해서 pink 클래스 모두 출력해보기