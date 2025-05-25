async function DisplayCategories(){
       try{
const {data}=await axios.get("https://dummyjson.com/products/category-list");
console.log(data);
html='';
for(i=0;i<data.length;i++){
    html+=`<tr>
    <td>category${i}</td>
       <td>${data[i]}</td>
                      <td>  <a href="./product-detail.html?category=${data[i]}"> details </a>
</td>
    </tr>
  
    `
}
document.querySelector(".Category-Body").innerHTML=html;
}
catch(e){
  let html="";
    html+=`<h3 class="error">${e.message}</h3>`
   document.querySelector(".Category-Body").innerHTML=html;

}
finally{
       document.querySelector(".loader-container").classList.add('d-none');

}
}
DisplayCategories();








async function DisplayProducts(){
              try{
const {data}=await axios.get("https://dummyjson.com/products?limit=5");
console.log(data);
html='';
for(i=0;i<data.products.length;i++){
    html+=`<tr>
   
       <td>${data.products[i].title}</td>
          
       <td><img src="${data.products[i].thumbnail}" width="50%"></td>
              <td>${data.products[i].price}</td>
      <td>  <a href="detail.html?id=${data.products[i].id}"> details </a>
</td>
    </tr>
  
    `
}
document.querySelector(".product-Body").innerHTML=html;
}catch(e){
  let html="";
    html+=`<h3 class="error">${e.message}</h3>`
   document.querySelector(".product-Body").innerHTML=html;

}
finally{
       document.querySelector(".loader-container").classList.add('d-none');

}
}
DisplayProducts();