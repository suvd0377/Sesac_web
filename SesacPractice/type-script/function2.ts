// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

function sum2(...numbers: number[]): number {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// 테스트는 이렇게!
console.log(sum2(1, 2, 3, 4, 10)); // 20
