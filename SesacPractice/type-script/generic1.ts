function arrElement<T>(arr: T[], y: number): T {
  return arr[y];
}
console.log(arrElement<string>(['a'], 0));
