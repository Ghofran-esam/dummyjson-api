

async function getDetailsProducts(){
try{
const Params=new URLSearchParams(window.location.search);
console.log(Params);
 const userId = Params.get("category");

console.log(userId);


 const {data} = await axios.get(`https://dummyjson.com/products/category/${userId}`);
console.log(data);
html="";
let html = "";
for(let i = 0; i < data.products.length; i++) {
  html += `
    <tr>
      <td>${data.products[i].title}</td>
      <td>${data.products[i].description}</td>
      <td>
        ${data.products[i].images.map(img => `<img src="${img}" width="30%" alt="product image"/>`).join('')}
      </td>
    </tr>
  `;
}
document.querySelector(".Body").innerHTML = html;


}
catch(e){
 
  let html="";
    html+=`<h1 class="error">${e.message}</h1>`
   document.querySelector("section").innerHTML=html;
}
}
getDetailsProducts();