const indexList = document.querySelector('#indexList');


// 渲染跑馬燈
function renderingList(){
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
    indexList.innerHTML = str;
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
    renderingList();;
    swiperList()
}



  window.onload = init;