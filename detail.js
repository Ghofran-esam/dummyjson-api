

async function getDetails(){
try{
const Params=new URLSearchParams(window.location.search);
console.log(Params);
 const userId = Params.get("id");

console.log(userId);


 const {data} = await axios.get(`https://dummyjson.com/products/${userId}`);
 html="";
 html+=`<tr>

       <td>${data.title}</td>
              <td>${data.description}</td>
              <td><img src="${data.images}" width="30%" alt="this is image"/></td>

    </tr>
  
    `
    document.querySelector(".Body").innerHTML=html;


}
catch(e){
 
  let html="";
    html+=`<h1 class="error">${e.message}</h1>`
   document.querySelector("section").innerHTML=html;
}
}
getDetails();