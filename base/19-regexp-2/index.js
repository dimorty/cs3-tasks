function zipStr(str) {
  return str.replace(/(.)\1+/g, "$1");
}

console.log(zipStr("abbaabbafffbezza")); // ababafbeza

function unique(str) {
  const regexp = /(\w)/g;
  return str.replace(regexp, (sym) => {
    return str.match(new RegExp(sym, "g")).length > 1 ? "" : sym;
  });
}

console.log(unique("abaceffgw")); // bcegw

function findMoney(str) {
  const regexp = /\d[\d\s]*[.,]?\d*\p{Sc}/gu;
  return str.match(regexp);
}

// ['100 00,53$', '500₽']
console.log(
  findMoney(
    `20.10.2020 Федор взял у меня 100 00,53$ и обещался вернуть не позднее 25 числа, но уже через 2 дня, он занял еще 500₽`,
  ),
);
