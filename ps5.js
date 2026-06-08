const getGrade = (score) => {
  if (score >= 90) {
    console.log("A등급 입니다.");
  } else if (score >= 80) {
    console.log("B등급 입니다.");
  } else if (score >= 70) {
    console.log("C등급 입니다.");
  } else {
    console.log("조금 더 연습합니다");
  }
};

let s = 70;
getGrade(s);
