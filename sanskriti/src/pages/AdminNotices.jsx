import React, { useEffect, useState } from "react";

const AdminNotices = () => {

const [notices,setNotices] = useState([]);

const [title,setTitle] = useState("");
const [date,setDate] = useState("");
const [description,setDescription] = useState("");

const [editId,setEditId] = useState(null);


// FETCH NOTICES

const fetchNotices = async ()=>{

const res = await fetch("https://araybhat-1.onrender.com/api/notices/all");

const data = await res.json();

setNotices(data);

};

useEffect(()=>{

fetchNotices();

},[]);



// ADD NOTICE

const addNotice = async ()=>{

await fetch("https://araybhat-1.onrender.com/api/notices/add",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title,
date,
description
})

});

setTitle("");
setDate("");
setDescription("");

fetchNotices();

};



// DELETE NOTICE

const deleteNotice = async(id)=>{

await fetch(`https://araybhat-1.onrender.com/api/notices/delete/${id}`,{

method:"DELETE"

});

fetchNotices();

};



// EDIT NOTICE

const editNotice = (notice)=>{

setEditId(notice._id);

setTitle(notice.title);
setDate(notice.date);
setDescription(notice.description);

};



// UPDATE NOTICE

const updateNotice = async ()=>{

await fetch(`https://araybhat-1.onrender.com/api/notices/update/${editId}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
title,
date,
description
})

});

setEditId(null);

setTitle("");
setDate("");
setDescription("");

fetchNotices();

};



return(

<div className="p-10">

<h1 className="text-2xl font-bold mb-6">

Manage Notices

</h1>



{/* FORM */}

<div className="flex gap-3 mb-6">

<input
value={title}
placeholder="Title"
className="border p-2"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
value={date}
placeholder="Date"
className="border p-2"
onChange={(e)=>setDate(e.target.value)}
/>

<input
value={description}
placeholder="Description"
className="border p-2"
onChange={(e)=>setDescription(e.target.value)}
/>


{editId ? (

<button
onClick={updateNotice}
className="bg-blue-600 text-white px-4"
>

Update

</button>

):( 

<button
onClick={addNotice}
className="bg-green-700 text-white px-4"
>

Add Notice

</button>

)}

</div>



{/* NOTICE LIST */}

{notices.map((n)=>(

<div key={n._id} className="bg-white shadow p-4 mb-3">

<h3 className="font-bold">

{n.title}

</h3>

<p>

{n.date}

</p>

<p>

{n.description}

</p>

<div className="flex gap-3 mt-2">

<button
onClick={()=>editNotice(n)}
className="bg-yellow-500 text-white px-3 py-1"
>

Edit

</button>

<button
onClick={()=>deleteNotice(n._id)}
className="bg-red-600 text-white px-3 py-1"
>

Delete

</button>

</div>

</div>

))}

</div>

)

}

export default AdminNotices