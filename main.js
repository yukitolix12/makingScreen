let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

//監視対象になった瞬間、activeを負荷する関数
let setItemActive = (entries) => {
    //console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
};

let options = {

};

//どこにいるのか監視する。そして、特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive,options);

observer.observe(titleMessage);

