function printSome<T>(x: T, y: T): T {
  console.log('x and y', x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>('1', '2');
printSome<boolean>(false, true);

function printSome2<T, K>(x: T, y: K): T {
  console.log('x and y', x, y);
  return x;
}

printSome2<number, string>(1, 'hello');

function arrLength(arr: any[]): number {
  return arr.length;
}

function getValue(val: any): any {
  return val;
}

function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

function getValue2<T>(val: T): T {
  return val;
}

console.log(arrLength2<string>(['a', 'B']));
console.log(arrLength2<string | number>(['a', 'B', 1, 2]));

console.log(getValue2<string[]>(['a']));

// interface generic 사용
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: 'apple',
  createAt: new Date('2023-10-13'),
  option: 'black',
};

console.log(iphone15);

type IphoneOption = {
  color: string;
  storage: number;
};

const Iphone16: Phone<IphoneOption> = {
  company: 'apple',
  createAt: new Date('2024-10-06'),
  option: {
    color: 'silver',
    storage: 256,
  },
};

console.log(Iphone16);
