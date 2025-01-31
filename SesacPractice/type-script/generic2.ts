// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
function arrElement2<T>(x: T[], y: number): boolean {
  if (y >= x.length) {
    return false;
  } else {
    return true;
  }
}
console.log(arrElement<string>(['a'], 1)); // false
