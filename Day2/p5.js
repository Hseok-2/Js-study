const buildServerUrl = (host, partValue, useHttps) => {
  if (!host) return "host가 필요합니다.";

  let port = Number(partValue);

  if (Number.isNaN(port)) return "port는 숫자여야 합니다.";

  if (!Number.isInteger(port)) return "port는 정수여야 합니다.";

  if (port < 1 || port > 65535) return "port 범위가 올바르지 않습니다.";

  return `${useHttps ? "https" : "http"}://${host}:${port}`;
};

console.log(buildServerUrl("localhost", 8080, true));
