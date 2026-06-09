function getCommandMessage(command) {
  switch (command) {
    case "start":
      return "서버를 시작합니다.";
    case "stop":
      return "서버를 중지합니다.";
    case "status":
      return "서버 상태를 확인합니다.";
    default:
      return "알 수 없는 명령어입니다.";
  }
}

let command = "start";
console.log(getCommandMessage(command));
