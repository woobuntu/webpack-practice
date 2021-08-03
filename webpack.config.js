const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// webpack5 이전 버전에서는 extract-text-webpack-plugin 사용

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
  module: {
    // rule == loader 이다.
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/, // 정규표현식 test를 통해 js파일에만 바벨을 적용
      },
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // 오른쪽의 loader부터 왼쪽으로 순차적으로 적용된다.
        // 1. css-loader에 의해 처리된 text를
        test: /\.css$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000,
              // 40000byte가 넘어가는 이미지는 별도의 파일로,
              // 그렇지 않는 이미지는 bundle.js에 포함
            },
          },
          "image-webpack-loader",
        ],
        // 오른쪽의 loader부터 왼쪽으로 순차적으로 적용된다.
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
  // 2. output 디렉토리에 style.css로 저장한다.
  // 생성자에 인자를 전달하지 않아도 디폴트 값이 적용된다.
};

module.exports = config;
