// 패널돌리기

const frame = document.querySelector("section");
const articleArr = frame.querySelectorAll("article");
const len = articleArr.length;

// len 만큼 돌리기 

console.log(articleArr);

const names = ["cardio","groove","happy","light","lily","limes","pop","swing"];

const deg = 360/len; 
for (let i = 0; i<len ; i++) {
  articleArr[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  // 사진 부분 일괄 적용 
  const pic = articleArr[i].querySelector(".pic");
  pic.style.backgroundImage = `url("../img/${names[i]}.jpg")`;

  // 음악 제목 일괄 적용
  const title = articleArr[i].querySelector(".text>h2");
  title.innerHTML = `${names[i]}`;

  //음악 태그 & 파일 일괄 적용 
  const audio  = document.createElement("audio");
  audio.setAttribute("src", `../music/music/${names[i]}.mp3`);
  audio.setAttribute("loop","loop");
  articleArr[i].append(audio);
}

const prev = document.querySelector(".btnPrev"); 
const next = document.querySelector(".btnNext"); 

let num = 0; //회전 각도 조절 
let active = 0; //활성화 패널 위치 기억 

prev.addEventListener("click" , function(e) {
  frame.style.transform = `rotate(${deg * ++num}deg)`

  if(active === 0 ){
    active = len - 1 ;
  } else {
    active-- ;
  }

  for (let el  of articleArr) {
    el.classList.remove("on");
  }
  articleArr[active].classList.add("on");
});

//이전패널 위치 
next.addEventListener("click", function (e) 
{ 
  frame.style.transform = `rotate(${deg * --num}deg)`;

if(active === len-1 ){
  active = 0;
} else {
  active++ ;
}

for (let el  of articleArr) {
  el.classList.remove("on");
};

articleArr[active].classList.add("on");
});


// CD 모양 사진 회전 음악 파일 컨트롤 
let before = 0; //이전 패널 위치 기억용 변수 
for(let el of articleArr) {
  const play = el.querySelector(".play");
  // const articleall = el.querySelectorAll("article");
  const pause = el.querySelector(".pause");
  const reload = el.querySelector(".reload");

  play.addEventListener("click", function(e) {

   if(before===0){
    before = e.target;    
   } else if (before !== e.target) {
    before.closest("article").querySelector(".pic").classList.remove("on");
    before.closest("article").querySelector("audio").pause();
    before = e.target;
   }
  
    // e.target.closest("article").querySelector(".pic").classList.add("on");
   el.querySelector(".pic").classList.add("on");
   el.querySelector("audio").play();

  //  if(el.querySelector(".pic").classList.contains("on")) {  
  //   isOn = true;
  //   console.log("true");
  // }
  

  });

  pause.addEventListener("click",function(e){
    el.querySelector(".pic").classList.remove("on");
    e.target.closest("article").querySelector("audio").pause();
  });

  reload.addEventListener("click" , function(){

   if(before===0){
    before = e.Target;    
   } else if (before !== e.target) {
    before.closest("article").querySelector(".pic").classList.remove("on");
    before.closest("article").querySelector("audio").pause();
    before = e.target;
   }


    el.querySelector(".pic").classList.add("on");
    el.querySelector("audio").load();
    el.querySelector("audio").play();
    
  })
}