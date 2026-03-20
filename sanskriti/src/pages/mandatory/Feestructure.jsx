import React, { useState, useEffect } from "react";
import { FaMoneyBillWave, FaSchool, FaLaptop } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const Feestructure = () => {

const [classFees,setClassFees] = useState([]);

useEffect(()=>{

fetch("https://araybhat-1.onrender.com/api/fees/all")

.then(res=>res.json())

.then(data=>{
setClassFees(data)
})

.catch(err=>console.log(err))

},[])

return(

<div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10 px-4">

<div className="max-w-7xl mx-auto">


{/* HEADING */}

<div className="text-center mb-10">

<h1 className="text-3xl md:text-4xl font-bold text-green-700 flex justify-center items-center gap-2">

<FaSchool />

School Fee Structure

</h1>

<p className="text-gray-600 mt-2">
Transparent and structured fee details for all classes
</p>

</div>


{/* TABLE */}

<div className="bg-white shadow-xl rounded-2xl overflow-x-auto">

<table className="min-w-full text-sm text-center">

<thead className="bg-green-600 text-white">

<tr>

<th className="p-3">Class</th>

<th className="p-3">
<FaMoneyBillWave className="inline mr-1"/>
Tuition
</th>

<th className="p-3">
<GiProgression className="inline mr-1"/>
Activity
</th>

<th className="p-3">
<FaLaptop className="inline mr-1"/>
Computer
</th>

<th className="p-3">
<MdAppRegistration className="inline mr-1"/>
Registration
</th>

<th className="p-3">Development</th>

<th className="p-3">Admission</th>

<th className="p-3">Total / Month</th>

<th className="p-3">Total</th>

</tr>

</thead>


<tbody>

{classFees.map((item,index)=>(

<tr
key={item._id}
className="border-t hover:bg-green-50 transition"
>

<td className="p-3 font-semibold">
{item.className}
</td>

<td className="p-3 text-blue-600 font-medium">
₹{item.tuition}
</td>

<td className="p-3">
{item.activity || "-"}
</td>

<td className="p-3">
{item.computer || "-"}
</td>

<td className="p-3">
₹{item.regFee}
</td>

<td className="p-3">
₹{item.development}
</td>

<td className="p-3">
₹{item.admission}
</td>

<td className="p-3 font-semibold text-purple-600">
₹{item.totalPerMonth}
</td>

<td className="p-3 font-bold text-green-700">
₹{item.total}
</td>

</tr>

))}

</tbody>

</table>

</div>


{/* INFO CARDS */}

<div className="grid md:grid-cols-3 gap-6 mt-10">

<div className="bg-white shadow-md rounded-xl p-6 text-center">

<FaMoneyBillWave className="text-3xl text-green-600 mx-auto mb-3"/>

<h3 className="font-bold text-lg">Transparent Fee</h3>

<p className="text-gray-600 text-sm mt-2">
All fee details are clearly provided for parents.
</p>

</div>


<div className="bg-white shadow-md rounded-xl p-6 text-center">

<FaLaptop className="text-3xl text-blue-600 mx-auto mb-3"/>

<h3 className="font-bold text-lg">Modern Education</h3>

<p className="text-gray-600 text-sm mt-2">
Computer and activity based learning included.
</p>

</div>


<div className="bg-white shadow-md rounded-xl p-6 text-center">

<FaSchool className="text-3xl text-purple-600 mx-auto mb-3"/>

<h3 className="font-bold text-lg">Quality Infrastructure</h3>

<p className="text-gray-600 text-sm mt-2">
Development fee supports better school facilities.
</p>

</div>

</div>

</div>

</div>

)

}

export default Feestructure;