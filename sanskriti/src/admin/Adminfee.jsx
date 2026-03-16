import React, { useState, useEffect } from "react";

const AdminFee = () => {

const [fees,setFees] = useState([]);

const [form,setForm] = useState({
className:"",
tuition:"",
activity:"",
computer:"",
totalPerMonth:"",
regFee:"",
development:"",
admission:"",
total:""
});


// FETCH FEES
const fetchFees = async () => {

try{

const res = await fetch("https://araybhat-1.onrender.com/api/fees/all");
const data = await res.json();

setFees(data);

}catch(err){

console.log(err)

}

};


useEffect(()=>{

fetchFees();

},[]);


// INPUT CHANGE
const handleChange = (e)=>{

setForm({
...form,
[e.target.name]:e.target.value
})

};


// ADD FEE
const submitFee = async ()=>{

try{

const res = await fetch("https://araybhat-1.onrender.com/api/fees/add",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

});

const data = await res.json();

alert("Fee Added Successfully ✅");

// CLEAR FORM
setForm({
className:"",
tuition:"",
activity:"",
computer:"",
totalPerMonth:"",
regFee:"",
development:"",
admission:"",
total:""
});

// REFRESH LIST
fetchFees();

}catch(err){

console.log(err)

}

};


return(

<div className="p-6 md:p-10">

<h2 className="text-2xl md:text-3xl font-bold mb-6">
Fee Management
</h2>


{/* FORM */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<input
name="className"
placeholder="Class"
value={form.className}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="tuition"
placeholder="Tuition Fee"
value={form.tuition}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="activity"
placeholder="Activity Fee"
value={form.activity}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="computer"
placeholder="Computer Fee"
value={form.computer}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="totalPerMonth"
placeholder="Total Per Month"
value={form.totalPerMonth}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="regFee"
placeholder="Registration Fee"
value={form.regFee}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="development"
placeholder="Development Fee"
value={form.development}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="admission"
placeholder="Admission Fee"
value={form.admission}
onChange={handleChange}
className="border p-2 rounded"
/>

<input
name="total"
placeholder="Total"
value={form.total}
onChange={handleChange}
className="border p-2 rounded"
/>

</div>


<button
onClick={submitFee}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 mt-6 rounded"
>

Add Fee

</button>


{/* FEE TABLE */}

<div className="mt-10 overflow-x-auto">

<table className="min-w-full border text-center">

<thead className="bg-green-600 text-white">

<tr>
<th className="p-2">Class</th>
<th className="p-2">Tuition</th>
<th className="p-2">Activity</th>
<th className="p-2">Computer</th>
<th className="p-2">Total</th>
</tr>

</thead>

<tbody>

{fees.map((item)=>(
<tr key={item._id} className="border-t">

<td className="p-2">{item.className}</td>
<td className="p-2">₹{item.tuition}</td>
<td className="p-2">{item.activity}</td>
<td className="p-2">{item.computer}</td>
<td className="p-2 font-bold">₹{item.total}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default AdminFee;