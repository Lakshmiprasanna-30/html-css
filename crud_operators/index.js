import navbar from "./components/navbar.js";
let nav_div=document.getElementById("navbar");
nav_div.innerHTML=navbar();
let post_div=document.getElementById("post");


const getData = async ( ) => {
    try{
        let response= await fetch("http://localhost:3000/posts");
        let data = await response.json();
        console.log(data);
        data.forEach((element) => {
            let parent_div = document.createElement("div");
            parent_div.innerHTML="";

            let image = document.createElement("img");
            image.src=element.images;
            let h1 = document.createElement("h1");
            h1.innerText=element.title;

            parent_div.append(image,h1);
            post_div.append(parent_div);


        })

    

    }
    catch(error){
        console.log(error);
    }

    

}
getData();