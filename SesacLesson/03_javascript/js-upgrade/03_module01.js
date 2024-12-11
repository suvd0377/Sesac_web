const colors =['#fff', '#ddd', 'red']

const sayHi= function(){
    console.log('hi module1')
}

function sayName(name){
    console.log('네 이름은' + name)
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getBornYear(){
        return new Date().getFullYear() - this.age
    }
}

//commonJS 방식 데이터 한 번에 내보내기
MediaSourceHandle.exports={
    colors,
    sayHi,
    sayName
}