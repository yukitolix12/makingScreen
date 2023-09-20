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
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {

};

//どこにいるのか監視する。そして、特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive,options);

observer.observe(titleMessage);

//img-wrapは偶数と奇数で出現する場所が違う、そういう処理を書く
imagesItems.map((item, index) => {
    console.log(item,index);
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});