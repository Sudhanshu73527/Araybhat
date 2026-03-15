import React from "react";

const Feestructure = () => {
  const classFees = [
    {
      class: "K1, K2, K3",
      tuition: 1050,
      activity: "-",
      computer: "-",
      totalPerMonth: 1050,
      regFee: 200,
      development: 2000,
      admission: 2400,
      total: 5650,
    },
    {
      class: "Prep to III",
      tuition: 1425,
      activity: "-",
      computer: "-",
      totalPerMonth: 1425,
      regFee: 200,
      development: 2000,
      admission: 2400,
      total: 6025,
    },
    {
      class: "IV to V",
      tuition: 1500,
      activity: "-",
      computer: "-",
      totalPerMonth: 1500,
      regFee: 200,
      development: 2000,
      admission: 2400,
      total: 6100,
    },
    {
      class: "VI to VIII",
      tuition: 1650,
      activity: "-",
      computer: "-",
      totalPerMonth: 1650,
      regFee: 200,
      development: 2000,
      admission: 2400,
      total: 6250,
    },
    {
      class: "IX to X",
      tuition: 1700,
      activity: "-",
      computer: 200,
      totalPerMonth: 1900,
      regFee: 200,
      development: 2000,
      admission: 2400,
      total: 6500,
    },
  ];

  const conveyance = [
    { village: "Semara", fee: 600 },
    { village: "Bargon", fee: 600 },
    { village: "Belwa", fee: 700 },
    { village: "Mahui/Dih", fee: 700 },
    { village: "Nawka Tola Mahui", fee: 600 },
    { village: "Jogia", fee: 700 },
    { village: "Jogia/Dih", fee: 700 },
    { village: "Manguraha", fee: 650 },
    { village: "Dumra", fee: 700 },
    { village: "Inarbarwa", fee: 750 },
    { village: "Harinagar", fee: 800 },
    { village: "Ramnagar", fee: 850 },
    { village: "Pakari", fee: 600 },
    { village: "Madhubani", fee: 600 },
    { village: "Baswaria", fee: 850 },
    { village: "Kandhwaliya", fee: 800 },
    { village: "Bagahi", fee: 750 },
    { village: "Hardiya", fee: 650 },
    { village: "Bargajwa", fee: 600 },
    { village: "Serhwa", fee: 650 },
    { village: "Sabeya", fee: 700 },
    { village: "Bahuari", fee: 650 },
    { village: "Kandhwaliya", fee: 800 },
    { village: "Gabnaha", fee: 850 },
    { village: "Murera", fee: 750 },
    { village: "Telpur", fee: 800 },
    { village: "Deurwa", fee: 800 },
    { village: "Byaspur", fee: 900 },
    { village: "Malahitola", fee: 950 },
    { village: "Sikta", fee: 950 },
    { village: "Pachrukhiya", fee: 850 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            Fee Structure (2026-27)
          </h1>
          <p className="text-gray-600 mt-2">
            Aryabhatta National Public School – Class Wise Fee Details
          </p>
        </div>

        {/* Class Fee Table */}
        <div className="bg-white shadow-xl rounded-2xl overflow-x-auto mb-12">
          <table className="min-w-full text-sm text-center border">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3">Class</th>
                <th className="p-3">Tuition Fee</th>
                <th className="p-3">Activity Fee</th>
                <th className="p-3">Computer / Lab</th>
                <th className="p-3">Total / Month</th>
                <th className="p-3">Reg. Fee</th>
                <th className="p-3">Development</th>
                <th className="p-3">Admission Fee</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>

            <tbody>
              {classFees.map((item, index) => (
                <tr key={index} className="border-t hover:bg-green-50">
                  <td className="p-3 font-semibold">{item.class}</td>
                  <td className="p-3">₹{item.tuition}</td>
                  <td className="p-3">{item.activity}</td>
                  <td className="p-3">
                    {item.computer !== "-" ? `₹${item.computer}` : "-"}
                  </td>
                  <td className="p-3 font-semibold text-blue-600">
                    ₹{item.totalPerMonth}
                  </td>
                  <td className="p-3">₹{item.regFee}</td>
                  <td className="p-3">₹{item.development}</td>
                  <td className="p-3">₹{item.admission}</td>
                  <td className="p-3 font-bold text-green-700">
                    ₹{item.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Extra Charges */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-green-700 mb-4">
            Additional Charges
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-blue-100 p-4 rounded-lg font-semibold">
              Tie: ₹50 / ₹70
            </div>

            <div className="bg-green-100 p-4 rounded-lg font-semibold">
              Belt: ₹100
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg font-semibold">
              Diary: ₹100
            </div>

            <div className="bg-red-100 p-4 rounded-lg font-semibold">
              ID Card: ₹80
            </div>

            <div className="bg-purple-100 p-4 rounded-lg font-semibold">
              Copy: ₹25
            </div>
          </div>
        </div>

        {/* Conveyance */}
        <div className="bg-white shadow-xl rounded-2xl overflow-x-auto">
          <h2 className="text-xl font-bold text-center text-green-700 py-6">
            Transportation Fee (Village Wise)
          </h2>

          <table className="min-w-full text-sm text-center border">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">S.No</th>
                <th className="p-3">Village Name</th>
                <th className="p-3">Conveyance Fee</th>
              </tr>
            </thead>

            <tbody>
              {conveyance.map((item, index) => (
                <tr key={index} className="border-t hover:bg-blue-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{item.village}</td>
                  <td className="p-3 font-semibold text-blue-700">
                    ₹{item.fee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Feestructure;