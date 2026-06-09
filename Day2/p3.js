function normalizeName(value) {
  if (value === null || value === undefined) return "이름 없음";

  let str = String(value).trim();
  return str === "" ? "이름 없음" : str;
}

let name = "김하나 ";
console.log(
  `normalizeName("${name}")의 결과는 "${normalizeName(name)}" 입니다.`,
);
