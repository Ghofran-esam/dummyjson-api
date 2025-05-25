async function DisplayProducts(){
        try{
const {data}=await axios.get("https://dummyjson.com/products");
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

DisplayProducts();