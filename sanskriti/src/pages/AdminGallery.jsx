import React,{useState,useEffect} from "react";

const AdminGallery = ()=>{

const [images,setImages] = useState([]);
const [file,setFile] = useState(null);


const fetchImages = async()=>{

const res = await fetch("https://araybhat-1.onrender.com/api/gallery/all");

const data = await res.json();

setImages(data);

};

useEffect(()=>{

fetchImages();

},[]);



const uploadImage = async()=>{

const formData = new FormData();

formData.append("image",file);

await fetch("https://araybhat-1.onrender.com/api/gallery/upload",{

method:"POST",

body:formData

});

fetchImages();

};



const deleteImage = async(id)=>{

await fetch(`https://araybhat-1.onrender.com/gallery/delete/${id}`,{

method:"DELETE"

});

fetchImages();

};


return(

<div className="p-10">

<h1 className="text-2xl font-bold mb-6">
Manage Gallery
</h1>


<input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

<button
onClick={uploadImage}
className="bg-green-700 text-white px-4 py-2 ml-3"
>

Upload

</button>


<div className="grid grid-cols-4 gap-4 mt-10">

{images.map((img)=> (

<div key={img._id}>

<img
src={`https://araybhat-1.onrender.com/uploads/${img.image}`}
className="w-full h-40 object-cover"
/>

<button
onClick={()=>deleteImage(img._id)}
className="bg-red-600 text-white px-3 py-1 mt-2"
>

Delete

</button>

</div>

))}

</div>

</div>

)

}

export default AdminGallery