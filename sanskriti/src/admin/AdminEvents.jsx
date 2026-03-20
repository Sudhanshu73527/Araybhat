import React,{useState,useEffect} from "react";

const AdminEvents = ()=>{

const [events,setEvents] = useState([]);
const [title,setTitle] = useState("");
const [file,setFile] = useState(null);


const fetchEvents = async()=>{

const res = await fetch("https://araybhat-1.onrender.com/api/events/all");

const data = await res.json();

setEvents(data);

};

useEffect(()=>{

fetchEvents();

},[]);



const uploadEvent = async()=>{

const formData = new FormData();

formData.append("title",title);
formData.append("image",file);

await fetch("https://araybhat-1.onrender.com/api/events/upload",{

method:"POST",
body:formData

});

setTitle("");
fetchEvents();

};



const deleteEvent = async(id)=>{

await fetch(`https://araybhat-1.onrender.com/api/events/delete/${id}`,{

method:"DELETE"

});

fetchEvents();

};



return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">

Event Manager

</h1>


<input
type="text"
placeholder="Event Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="border p-2 mr-3"
/>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button
onClick={uploadEvent}
className="bg-green-700 text-white px-4 py-2 ml-3"
>

Upload Event

</button>


<div className="grid grid-cols-4 gap-6 mt-10">

{events.map((event)=>(

<div key={event._id}>

<img
src={`https://araybhat-1.onrender.com/uploads/${event.image}`}
className="w-full h-40 object-cover rounded"
/>

<h3 className="text-center mt-2 font-semibold">

{event.title}

</h3>

<button
onClick={()=>deleteEvent(event._id)}
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

export default AdminEvents