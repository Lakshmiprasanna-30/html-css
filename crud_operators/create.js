let btn=document.getElementById("submit");
btn.disabled=true;
let images;


const addPost = async () => {
    let title=document.getElementById("title").value;
    let sendData={
        title:title,
        images,
    }
    try{
        let response=await fetch("http://localhost:3000/posts",{
            method:"POST",
            body:JSON.stringify(sendData),
            header:{
                "Content-Type":"application/json",
            }
        });
       let data=await response.json();
       console.log(data);


    }
    catch(error){
        console.log(error);
    }
    


}
let image_api_key="a595cfe03af2514c61a93d85c64877ae"
 async function handleImage(event){
    let file=document.getElementById("images");
    let form= new FormData();
    form.append("image", file.files[0]);


    try{
        let response=await fetch(`https://api.imgbb.com/1/upload?key=${image_api_key}`,{
            method:"POST",
            body:form
        
        });
        let data=await response.json();
        console.log("data",data);

        images = data.data.url;
        btn.disabled=false;

    }
    catch(error){
        console.log(error);

    }


}

const deletePost= async () => {
    let id=document.getElementById("post_id").value;
    try{
        let response=await fetch(`http://localhost:3000/posts/${id}`,{
            method:"DELETE",
            header:{
                "Content-Type" : "application/json",
            }
        })
        let data=await response.json();
        console.log(data);


    }
    catch(error){
        console.log(error);

    }
}



///---------------------------------------PATCH METHOD------------------------------------

const updatePost = async () => {
    let title=document.getElementById("update_title").value;
    let id=document.getElementById("update_id").value;
    let sendData={
        title:title,
    }
    try{
        let response=await fetch(`http://localhost:3000/posts/${id}`,{
            method:"PATCH",
            body:JSON.stringify(sendData),
            header:{
                "Content-Type":"application/json",
            }
        });
       let data=await response.json();
       console.log(data);


    }
    catch(error){
        console.log(error);
    }
    


}


////------------------------------------------PUT METHOD----------------------------
const replacePost = async () => {
    let title=document.getElementById("replace_title").value;
    let id=document.getElementById("replace_id").value;
    let sendData={
        title:title,
    }
    try{
        let response=await fetch(`http://localhost:3000/posts/${id}`,{
            method:"PUT",
            body:JSON.stringify(sendData),
            header:{
                "Content-Type":"application/json",
            }
        });
       let data=await response.json();
       console.log(data);


    }
    catch(error){
        console.log(error);
    }
    


}