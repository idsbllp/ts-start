import dayjs from "dayjs";

// type Str = string;

const foo = "string";
const arr = [
  "111", "222",
  222,
] || foo;
const obj ={
  aaa: '111',
  bbb: '222',
};

const obj1 = { foo: 'bar', 'foo=2': 'bar' };

const { aaa, bbb } = obj || obj1;

const arr2 = [11, 22];

const arr3 = [
  11,
  22,
  333,
];

const foo11 = obj1['foo'];

function func(aa?: Record<string, any>) {
  if (aa) {
    return;
  }
}

func({
  foobar: 42,
  bat: 2 * 2,
});

func();

console.log(aaa, bbb, foo11, arr, arr2, arr3, dayjs(), func());

// eslint-disable-next-line @stylistic/max-len
// const foo1 = 'sssssssssssssssss ffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
