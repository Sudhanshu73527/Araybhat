import React, {useState,useEffect} from "react";

const AdminAdmission = ()=>{

const [form,setForm] = useState({

title:"",
description:"",
startDate:"",
lastDate:"",
classes:"",
hurryMessage:""

});

useEffect(()=>{

fetch("https://araybhat-1.onrender.com/api/admission/get")

.then(res=>res.json())

.then(data=>{

if(data){

setForm(data)

}

})

},[]);


const handleChange = (e)=>{

setForm({

...form,
[e.target.name]:e.target.value

})

}


const saveData = async()=>{

await fetch("https://araybhat-1.onrender.com/api/admission/save",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

})

alert("Admission Updated Successfully")

}


return(

<div className="p-10">

<h2 className="text-3xl font-bold mb-6">
Admission Notification Management
</h2>


<div className="grid grid-cols-2 gap-4">

<input
name="title"
placeholder="Title"
value={form.title}
onChange={handleChange}
className="border p-2"
/>

<input
name="startDate"
placeholder="Start Date"
value={form.startDate}
onChange={handleChange}
className="border p-2"
/>

<input
name="lastDate"
placeholder="Last Date"
value={form.lastDate}
onChange={handleChange}
className="border p-2"
/>

<input
name="classes"
placeholder="Classes Available"
value={form.classes}
onChange={handleChange}
className="border p-2"
/>

<input
name="hurryMessage"
placeholder="Hurry Message"
value={form.hurryMessage}
onChange={handleChange}
className="border p-2"
/>

<textarea
name="description"
placeholder="Description"
value={form.description}
onChange={handleChange}
className="border p-2 col-span-2"
/>

</div>


<button
onClick={saveData}
className="bg-green-600 text-white px-6 py-3 mt-6"
>

Update Admission

</button>

</div>

)

}

export default AdminAdmission;