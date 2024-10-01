// 1
// const myRegExp1 = /[a-zA-Z0-9_$]+/;
const myRegExp1 = /[\w$]+/;
console.log(myRegExp1.test("привет")); // false
console.log(myRegExp1.test("hello_world$")); // true

// 2
const myRegExp2 = /,\d*,\d*;/;
const str = "762120,0,22;763827,0,50;750842,0,36;749909,0,95;755884,0,41;";
console.log(str.split(myRegExp2).filter(Boolean));

// 3
const myRegExp3 = /"(\w)": ("?\w"?)/g;
const arr = [...'{"a": 1, "b": "2"}'.matchAll(myRegExp3)];
console.log(arr[0], arr[1]);

// 4
function format(str, params) {
  const regex = /\$\{(\w+)}/g;
  return str.replaceAll(regex, (_, v) => params[v]);
}

const res = format("Hello, ${user}! Your age is ${age}.", {
  user: "Bob",
  age: 10,
});
console.log(res);

// 5
function calc(str) {
  const regex = /\n[а-яА-ЯеË\- \n]*/g;
  const split = str.split(regex).filter(Boolean);

  split.forEach((item) => {
    str = str.replace(item, new Function(`return ${item}`));
  });

  console.log(str);
  return str;
}

console.log(
  calc(`
Какой-то текст (10 + 15 - 24) ** 2
Еще какой-то текст 2 * 10
`) ==
    `
Какой-то текст 1
Еще какой-то текст 20
`,
);
