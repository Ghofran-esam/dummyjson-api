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
document.querySelector(".Body").innerHTML=html;
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
DisplayCategories();