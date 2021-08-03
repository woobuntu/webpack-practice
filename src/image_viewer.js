// url loader가 image 파일에 대한 import 구문을 만나면,
// build 디렉토리에 새롭게 생성될 파일 이름(해쉬값)을 이 big과 small 변수에 담는다고 한다.

import big from "../assets/big.jpeg";
console.log(1, big);
// big은 build디렉토리에 생성된 파일의 경로이다.

import small from "../assets/small.jpeg";
console.log(2, small);
// 이 small은 base64string이다.
// big과 small 모두 loader(file / image-webpack / url ???)에 의해 변환된 결과인 듯하다.

import "../styles/image_viewer.css";

const image = document.createElement("img");

image.src = big;

document.body.appendChild(image);
