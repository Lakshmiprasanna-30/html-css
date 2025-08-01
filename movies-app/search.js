let slideShowArray=[
    "https://image-resizer-cloud-api.akamaized.net/image/F1DE08EE-79B3-44CC-90D9-0303FE935BCC/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:33:20Z&dt=Web",
  "https://image-resizer-cloud-api.akamaized.net/image/3D24C9D0-A513-488B-9CAF-50D4BF2D13C3/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:37:12Z&dt=Web",
  "https://image-resizer-cloud-api.akamaized.net/image/2CD58353-24C9-4F51-9279-C8E1746D5C1F/0-3x1.jpg?width=1800&updatedTime=2024-08-31T12:12:14Z&dt=Web",
];


function slideShow(){
    let i=0
    let div=document.getElementById("courosal");
    let image=document.createElement("img");
    image.src=slideShowArray[0];
    div.append(image);


    setInterval(function(){
        if (i === slideShowArray.length){
            i=0;
        }
        image.src=slideShowArray[i];
        i=i+1;

    },2000);
}
slideShow();

async function searchMovie(){
    try{
        let div=document.getElementById("loader_div");
    div.style.display="block";


    let query=document.getElementById("query").value;
    
    let response= await fetch(
        `http://www.omdbapi.com/?apikey=9278c7d3&s=${query}`

    );
    let data=await response.json();
    console.log(data.Search);
    append(data.Search);


    }catch(error){
        console.log("error",error);
    }
    


}
function append(data){
    let loader=document.getElementById("loader_div");
    loader.style.display="none";
    let data_div=document.getElementById("movies-data");
    data_div.innerHTML="";
    data.forEach((element)=>{
        let div=document.createElement("div");
        div.className="fetch_movies";
        let image=document.createElement("img");
        image.src=element.Poster;
        // image.id=poster;

        let title=document.createElement("h1");
        title.innerText=element.Title;

        let year=document.createElement("p");
        year.innerText=element.Year;

        div.append(image,title,year);

        data_div.append(div);

    });
    
    

}