const path = require("path");

const config = {
  entry: "./src/index.js",
  // 브라우저에서 애플리케이션이 구동될 때 처음으로 실행될 파일
  output: {
    path: path.resolve(__dirname, "build"),
    // 반드시 절대 경로로 지정해주어야 한다.
    // path.resolve 메서드는 os에 상관없이 현재 파일 경로를 정확하게 명시한다.
    // __dirname : 현재 working directory이다.
    filename: "bundle.js",
  },
};

module.exports = config;
