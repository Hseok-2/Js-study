function printStarts(maxLine) {
  for (let i = 0; i < maxLine; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

printStarts(4);
