let input = document.querySelector("input");
let btn = document.querySelector("button");
let photo = document.querySelector(".photos");



async function search(){
  let keys = "kLm6sgSAlc25JrQSOHuQgqsEs9lg8W3hQduUX9lFXHiEGjSWbrKIlJEF";
  let url = `https://api.pexels.com/v1/search?query=${input.value}&per_page=12`;
  
  try{
    let response = await fetch(url, {
      headers: {
        Authorization : keys
      }
    });
    let data = await response.json();

    photo.innerHTML = "";
    data.photos.forEach( (p)=>{
      let img = document.createElement("img");
      img.src = p.src.medium;
      img.alt = p.alt;
      photo.appendChild(img);
      
    })
  }
  catch (error){
    console.log(error);
  }
  
}


btn.addEventListener( "click", (ev)=>{
  if (input.value == ""){
    let ero = document.createElement("h1");
    ero.innerText = "pls enter image name";
    photo.appendChild(ero);
  }
  else{
    search();
  }
})

