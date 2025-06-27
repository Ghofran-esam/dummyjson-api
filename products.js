async function DisplayProducts(){
        try{
const {data}=await axios.get("https://dummyjson.com/products");
console.log(data);
html='';
for(i=0;i<data.products.length;i++){
    html+=`<tr>
   
       <td>${data.products[i].title}</td>
          
       <td><img src="${data.products[i].thumbnail}" width="50%" class='product-img'></td>
              <td>${data.products[i].price}</td>
          <td>  <a href="detail.html?id=${data.products[i].id}"> details </a>
</td>

    </tr>
  
    `
}
document.querySelector(".Body").innerHTML=html;
 customModal();


}
catch(e){
  let html="";
    html+=`<h3 class="error">${e.message}</h3>`
   document.querySelector("section").innerHTML=html;

}
finally{
       document.querySelector(".loader-container").classList.add('d-none');

}
}

DisplayProducts();
function customModal(){
const images = Array.from(document.querySelectorAll(".product-img"));
const modal =document.querySelector(".my-modal");
const modalImg=document.querySelector(".modal-img");
const CloseBtn=document.querySelector(".close-btn");
const rightBtn=document.querySelector(".right-btn");
const leftBtn=document.querySelector(".left-btn");

let currentIndex=0;
images.forEach((img) =>{
img.onclick=function(e){
modal.classList.remove('d-none');

modalImg.setAttribute("src",e.target.getAttribute('src'));
currentIndex=images.indexOf(e.target);

}
})
function    CloseImage(){
  modal.classList.add("d-none");

}
CloseBtn.onclick=()=>{
  CloseImage();
}



function NextImage(){
 
currentIndex++;
if(currentIndex>=images.length){
  currentIndex=0;
}
modalImg.setAttribute("src",images[currentIndex].getAttribute('src'));




}
rightBtn.onclick=()=>{
NextImage();

}



function leftImage(){
 
currentIndex--;
if(currentIndex<0){
  currentIndex=images.length-1;
}
modalImg.setAttribute("src",images[currentIndex].getAttribute('src'));

}


leftBtn.onclick=()=>{
leftImage();

}
document.onkeydown=(e)=>{
  if(e.code=='ArrowRight'){
    NextImage()

  }
  else if(e.code=='ArrowLeft'){
    leftImage();
  }
  else if(e.code='Escape'){
    CloseImage();
  }
  
}



}



