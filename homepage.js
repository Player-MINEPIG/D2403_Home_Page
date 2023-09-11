let tempLog=document.getElementById("temp");

//通用函数及变量
let now = new Date(); //当前时间
  //随机整数
function Randint(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

  //随机浮点数
function RandReal(min,max){
  return Math.random()*(max-min)+min;
}
  
  //计算块距离网页顶部的绝对距离
function GetTop(element) {
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}
  

//图片部分
let main_graph = document.getElementsByClassName("main_graph")[0];

//查看距离高考的周数
let checkFlag = false;
  //傲娇（宅男特有的奇怪癖好）文本
let tsundereConversation = ["<br>（哼，给你看看也不是不彳亍）", "<br>（唔……都被看光了ಥ_ಥ）"]
  //显示周数（已用onclick连接）
function ShowDays() {
  let daysElement = document.getElementById("days").getElementsByTagName("button")[0];
  let span = document.getElementById("days").getElementsByTagName("span")[0];
  if (!checkFlag) {
    checkFlag = true;
    let exam = new Date(2024, 1, 6);
    let days = Math.floor((exam - now) / 1000 / 60 / 60 / 24 / 7);    
    daysElement.textContent = days + "周";
    span.innerHTML = tsundereConversation[0];
  }
  else if (checkFlag && (daysElement.innerText == "诶，刚看过就忘了吗")) {
    let exam = new Date(2024, 1, 6);
    let days = Math.floor((exam - now) / 1000 / 60 / 60 / 24 / 7);
    daysElement.textContent = days + "周";
    span.innerHTML = "<br>（那，那就再给你看看吧）";
  }
  else {
    daysElement.innerText = "诶，刚看过就忘了吗";
    span.innerHTML = tsundereConversation[1];
  }
}

//生日祝福
// class ClassMate {
//   constructor(number, name, birthMonth, birthDay) {
//     this.number = number;
//     this.name = name;
//     this.birthMonth = birthMonth;
//     this.birthDay = birthDay;
//   }
// }
let birthElement = document.getElementById("birth");

const classmatesName =
  ["甲","乙"];
const classmatesBirthMonth =
  [ 1,
    2];
const classmatesBirthDay =
  [ 12,
    22];
//创建新span
let birthName = document.getElementById("birthName");
birthName.style.gridColumn = "1";
birthName.style.userSelect = "none";
birthName.addEventListener("click", function () {
  birthName.classList.toggle("gradient-text");
});
let birthDate = document.getElementById("birthDate");
birthDate.style.gridColumn = "2";
textName = "";
textDate = "";
for (let i = 0; i < classmatesName.length; i++){
  let classmateBirthToNow = (new Date(now.getFullYear(), classmatesBirthMonth[i] - 1, classmatesBirthDay[i]) - now) / 1000 / 60 / 60 / 24;
  if (classmateBirthToNow <= 14-now.getDay() && classmateBirthToNow >= -7-now.getDay()) {
    textName=textName+classmatesName[i]+"<br>";
    textDate=textDate+classmatesBirthMonth[i]+"."+classmatesBirthDay[i]+"<br>";
  }
}
birthName.innerHTML = textName;
birthDate.innerHTML = textDate;

//交互部分
  //木鱼部分变量定义
let MAD = Randint(40, 80);
let beatFlag = false;
//添加事件监听器（id=sakaban的因为从始至终没有使用因此在html中用onclick连接）
  //开始按钮
let hhxx = document.getElementById("hhxx");
hhxx.addEventListener("click", Show);
hhxx.innerText = "好 好 学 习";

  //显示、关闭交互部分 
function Show() {
  let img = document.getElementById("wooden_fish");
  let interaction=document.getElementById("interaction");
  if (img.style.display == "none") {
    img.style.display = "block";
    sound_lyrics.style.display="block";
    hhxx.textContent = "功德："+MAD;
    interaction.style.gridTemplateColumns="9fr 1fr";
  } else {
    img.style.display = "none";
    sound_lyrics.style.display="none";
    hhxx.textContent = "好 好 学 习";
    interaction.style.gridTemplateColumns="1fr";
  }
}

  //播放歌词部分变量定义和函数
let lyrics=[
  "我们并不是<br>陌生相爱者",
  "你很了解尺子<br>俺也一样",
  "我想要一个<br>饱满的承诺",
  "你不会从<br>另一个兄弟那里<br>得到它",
  "我只想让你知道<br>我的感觉",
  "我会让你明白",
  "再也不会给你上",
  "再也不会让你下",
  "再也不会<br>一边跑圈<br>一边把你埋进沙漠",
  "再也不会让你嚎叫",
  "再也不会说再见",
  "再也不会说：<br>“躺下，我要伤害你”",
  "我们了解彼此<br>汪苏泷",
  "你的心曾经绞痛",
  "但你太害羞<br>不敢表达<br>（你心绞痛这件事）",
  "即使我们都知道<br>发生了什么",
  "我们了解游戏<br>而且我们要玩它",
  "如果你问我<br>我的感觉",
  "别告诉我<br>你**瞎了看不清",
  "永远不会放弃你",
  "永远不会令你沮丧",
  "永远不会抛弃你",
  "永远不会让你哭",
  "永远不会同你道别",
  "永远不会<br>用谎言伤害你",
  "再也不会给你上",
  "再也不会让你下",
  "再也不会<br>一边跑圈<br>一边把你埋进沙漠",
  "再也不会让你嚎叫",
  "再也不会说再见",
  "再也不会说：<br>“躺下，我要伤害你”",
  "（给你上，给你上）",
  "（放弃你，放弃你）",
  "再也不会给",
  "再也不会给<br>（给你上）",
  "再也不会放",
  "再也不会放<br>（放弃你）",
  "我只想让你知道<br>我的感觉",
  "我会让你明白",
  "永远不会放弃你",
  "永远不会令你沮丧",
  "永远不会抛弃你",
  "永远不会让你哭",
  "永远不会同你道别",
  "永远不会<br>用谎言伤害你",
  ".",
  "..",
  "..."
  ]
let sound_lyrics=document.getElementById("sound_lyrics");
let sound = document.getElementById("sound");
let soundImg = sound.getElementsByTagName("img")[0];
let lyricsNum = 0;
sound.addEventListener("click", Sound);
let lyricsElement = document.getElementById("lyrics");
lyricsElement.addEventListener("animationiteration", function () {
lyricsNum = (lyricsNum + 1) % lyrics.length;
lyricsElement.innerHTML = lyrics[lyricsNum];
});
lyricsElement.style.top = soundImg.style.top;

lyricsElement.style.left = parseFloat(soundImg.style.left.substring(0, soundImg.style.left.length - 2))*0.6 + "px";

//音符旋转与停止
function Sound() {    
let slash = sound.getElementsByClassName("slash")[0];
if (soundImg.style.animationPlayState == "paused") {
soundImg.style.animationPlayState = "running";
slash.style.display = "none";
lyricsElement.style.display = "block";
lyricsElement.innerHTML = lyrics[lyricsNum];
lyricsElement.style.animationPlayState = "running";
let lyricsLeft = soundImg.style.left;
} else {
soundImg.style.animationPlayState = "paused";
slash.style.display = "block";
lyricsElement.style.display = "none";
lyricsElement.style.animationPlayState = "paused";
}
}
  
  //敲打木鱼显示功德+1 & 在wooden_fish块内随机位置出现文字 
function MADP() {
  let wooden_fish = document.getElementById("wooden_fish");
  let img = wooden_fish.getElementsByTagName("img")[0];
  let text=wooden_fish.getElementsByTagName("p")[0];
  MAD += 1;
  if (MAD > 100+Randint(0,20)) {
    beatFlag=true;
    MAD = MAD-Randint(40,60);
    //获取woodenfish下的子项img改变其中的图片
    img.src = "./萨卡班木鱼_偏甲鱼3.png";
    // img.src = "/WEB_Files/uploadfile/202308/20230816204957575.png";
    text.innerHTML="萨卡班木鱼被你敲奄了<br>But still blesses you";
  }
  if (MAD > Randint(80,95) && beatFlag){
    img.src = "./萨卡班木鱼5.png";
    // img.src="/WEB_Files/uploadfile/202308/20230816204908855.png";
    text.innerHTML="萨卡班木鱼重获新生<br>May all the beauty be blessed";
  }
  //图片顺时针旋转30度
  img.style.transform = "rotate(" + Randint(10, 20) + "deg)";
  //图片回正
  setTimeout(function() {
    img.style.transform = "rotate(0deg)";
  }, 100);
  hhxx.textContent = "功德：" + MAD;
  //在wooden_fish块内随机位置出现文字
  let textElement = document.createElement("span");
  textElement.style.userSelect = "none";
  let x = RandReal(0.15,1.05)*(wooden_fish.clientWidth);
  let y = (RandReal(0.05,0.75) * wooden_fish.clientHeight) + GetTop(wooden_fish);
  wooden_fish.appendChild(textElement);
  textElement.textContent = "功德+1";
  textElement.style.position = "absolute";
  textElement.style.left = x+"px";
  textElement.style.top = y+"px";
  textElement.style.color = "#333333";
  textElement.style.fontSize = "1rem";
  setTimeout(function() {
    wooden_fish.removeChild(textElement);
  }, 1000);
}
