//실습1
const word1 = "abc";
const word2 = "xyz";

const result = [...word1, ...word2];

console.log(result);

//실습2 
class Shape{
    constructor(width, height){
        this.width= width;
        this.height=height;
    }

    getArea(){
        return `${this.width * this.height}`
    }

}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());

//실습3
class Rectangle{
}