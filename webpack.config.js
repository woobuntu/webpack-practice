var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, // 정규표현식 test를 통해 js파일에만 바벨을 적용
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        // css파일에는 두 loader를 적용하는데
        // use 배열에 나열된 것 중 오른쪽에 있는 것부터 적용이 된다.
        // 즉, css-loader의 output이 style-loader의 input으로 들어간다.
      },
    ],
  },
};
