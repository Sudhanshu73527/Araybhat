import React,{useState,useEffect} from "react";

const Schoolevents = ()=>{

const [events,setEvents] = useState([]);

useEffect(()=>{

fetch("https://araybhat-1.onrender.com/api/events/all")
.then(res=>res.json())
.then(data=>{
console.log("Events Data:", data); // debug
setEvents(data);
})
.catch(err=>{
console.log("Error:",err);
});

},[]);


return(

<section className="py-20 px-6 bg-gray-50">

<div className="max-w-7xl mx-auto">

<div className="text-center mb-14">

<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
School Events <span className="text-yellow-400">& Activities</span>
</h2>

<p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
Our school regularly organizes educational, cultural, and sports
events to support the overall development of students.
</p>

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

{events.map((event)=>(

<div
key={event._id}
className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
>

<div className="overflow-hidden">

<img
src={`https://araybhat-1.onrender.com/uploads/${event.image}`}
alt={event.title}
className="h-64 w-full object-cover transform group-hover:scale-110 transition duration-500"
/>

</div>

<div className="p-5 text-center">

<h3 className="text-lg font-semibold text-gray-700 group-hover:text-yellow-500 transition">
{event.title}
</h3>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default Schoolevents;