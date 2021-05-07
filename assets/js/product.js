const productList = document.querySelector('#productList');

// 渲染產品頁面
function renderingProduct(){
    let str = "";
    dataList.forEach(function(item,index){
        str+=`<div class="card card-${index}">
        <a href="detail.html">
        <div class="mb-2 card-img-top productImg productImg-${index}" style="background-image: url(${item["img"]})";></div>
        </a>
        <div>
          <h4>${item.tittle}</h4>
          <h5>NT$${item.price}</h5>
        </div>
      </div>`
    });
    productList.innerHTML = str;
    
}

function init(){
    renderingProduct();
}

window.onload=init;