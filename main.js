let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

//どこにいるのか監視する。そして、特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive,options);