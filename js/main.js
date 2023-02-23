// 패널돌리기

const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;

// len 만큼 돌리기 

console.log(articleArr);

const deg = 360/len; 
for (let i = 0; i<len ; i++) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
}