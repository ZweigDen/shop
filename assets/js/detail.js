const detailList = document.querySelector('#detailList');
const chartNum = document.querySelector('.chartNum');
const chartPrice = document.querySelector('.chartPrice');

let num = 1;
let price = 1080;
chartNum.textContent =num;
chartPrice.textContent += price;


$('.minChart').click(function(){
    if(num>0){
        num--;
        price -= 1080;
    }
    chartPrice.textContent = `NT$${price}`;
    chartNum.textContent = num;
});
$('.addChart').click(function(){
    if(num>=0){
        num++;
        price+=1080;
    }
    chartPrice.textContent = `NT$${price}`;
    chartNum.textContent = num;
});

// 渲染跑馬燈
function renderingDetail(){
    let str = "";
    dataList.forEach(function(item){
        str+=`<div class="swiper-slide">
        <div class="card">
            <div class="card-img-top mb-2 imgSize" style="background-image: url(${item["img"]});"></div>
            <div class="">
                <h4 class="mb-2">${item["tittle"]}</h4>
                <h5>NT$${item["price"]}</h5>
            </div>
        </div>
    </div>`
    });
    detailList.innerHTML = str;
}
// 跑馬燈
function swiperList(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            320: {
              slidesPerView: 1.65,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3.35,
              spaceBetween: 30,
            },
          }
      });
}



function init(){
    renderingDetail();;
    swiperList()
}



  window.onload = init;