import React,{useState,useEffect} from "react";

const AdminUpcomingEvents = ()=>{

const [events,setEvents] = useState([]);

const [title,setTitle] = useState("");
const [date,setDate] = useState("");
const [description,setDescription] = useState("");
const [file,setFile] = useState(null);


const fetchEvents = async()=>{

const res = await fetch("https://araybhat-1.onrender.com/api/upcoming-events/all");

const data = await res.json();

setEvents(data);

};

useEffect(()=>{

fetchEvents();

},[]);



const addEvent = async()=>{

const formData = new FormData();

formData.append("title",title);
formData.append("date",date);
formData.append("description",description);
formData.append("image",file);

await fetch("https://araybhat-1.onrender.com/api/upcoming-events/add",{

method:"POST",
body:formData

});

setTitle("");
setDate("");
setDescription("");

fetchEvents();

};



const deleteEvent = async(id)=>{

await fetch(`https://araybhat-1.onrender.com/api/upcoming-events/delete/${id}`,{

method:"DELETE"

});

fetchEvents();

};


return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">

Upcoming Events Manager

</h1>


<input
type="text"
placeholder="Event Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="border p-2 mr-2"
/>

<input
type="text"
placeholder="Event Date"
value={date}
onChange={(e)=>setDate(e.target.value)}
className="border p-2 mr-2"
/>

<input
type="text"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
className="border p-2 mr-2"
/>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button
onClick={addEvent}
className="bg-green-700 text-white px-4 py-2 ml-3"
>

Add Event

</button>


<div className="grid grid-cols-4 gap-6 mt-10">

{events.map((event)=>(

<div key={event._id}>

<img
src={`http://localhost:5000/uploads/${event.image}`}
className="w-full h-40 object-cover rounded"
/>

<h3 className="text-center font-semibold mt-2">

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

export default AdminUpcomingEvents