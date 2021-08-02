import sum from "./sum";
import "./image_viewer";
// image_viewer.js에서는 아무것도 export하지 않는다.
// image_viewer.js가 애플리케이션에서 해야 할 일은 한 번만 실행되면 되는 것이다.
// 그렇기에 여기서 import는 실제로 무언가를 import하는 것이 아니라 단순히
// image_viewer.js가 실행되도록 할 뿐이다.

const total = sum(10, 5);
console.log(total);
