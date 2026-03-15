import React,{useState,useEffect} from "react";

const UpcomingEvents = ()=>{

const [events,setEvents] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/upcoming-events/all")
.then(res=>res.json())
.then(data=>setEvents(data));

},[]);


return(

<section className="py-28 px-4 bg-gradient-to-b from-slate-50 to-white">

<div className="max-w-7xl mx-auto">

<div className="text-center max-w-3xl mx-auto mb-20">

<h2 className="text-4xl sm:text-7xl font-semibold text-black mb-4">
Upcoming <span className="text-yellow-400">Events</span>
</h2>

<div className="w-28 h-[2px] bg-yellow-400 mx-auto mb-6" />

<p className="text-gray-600 text-lg leading-relaxed">

Carefully planned events that nurture patriotism, creativity,
discipline and joyful learning experiences.

</p>

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

{events.map((event)=>(

<div
key={event._id}
className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow hover:shadow-xl transition"
>

<div className="relative h-60 overflow-hidden">

<img
src={`http://localhost:5000/uploads/${event.image}`}
className="w-full h-full object-cover"
/>

<span className="absolute top-4 left-4 bg-black text-yellow-400 px-4 py-1 rounded-full text-sm">

{event.date}

</span>

</div>

<div className="p-7 text-center">

<h3 className="text-lg font-semibold text-gray-800 mb-3">
{event.title}
</h3>

<p className="text-gray-600 text-[15px] leading-relaxed mb-6">
{event.description}
</p>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default UpcomingEvents