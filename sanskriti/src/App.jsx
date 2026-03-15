import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import InfoCards from './components/Infocards/Infocards'
// import SchoolFeatures from './components/SchoolFeatures/SchoolFeatures'
import Principal from './components/Principal/Principal'
import Chairmain from './components/Chairman/Chairmain'
// import Fotter from './components/Fotter/Fotter'
import Testi from './components/Testi/Testi'
// import SchoolPrompts from './components/SchoolPrompts/SchoolPrompts'
import WhatWeProvide from './components/WhatWeProvide/WhatWeProvide'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import Ourfacilities from './components/ourfacilities/Ourfacilities'
import AimSection from './components/AimSection/AimSection'
// import SchoolSections from './components/SchoolSections/SchoolSections'
import RCISSection from './components/RCISSection/RCISSection'
import SchoolHighlight from './components/SchoolHighlight/SchoolHighlight'
import Schoolevents from './components/Schoolevents/Schoolevents'


const App = () => {
  return (
    <div>
      {/* <Navbar/>  */}
      <Herosection/>
      <SchoolHighlight/>
      <InfoCards/>
      <RCISSection/>
      <Principal/>
      <Chairmain/>
      <Schoolevents/>
      <WhatWeProvide/>
      <UpcomingEvents/>
      <AimSection/>
      {/* <SchoolSections/> */}
      <Ourfacilities/>
      {/* <SchoolFeatures/> */}
      {/* <SchoolPrompts/> */}
      <Testi/>
      {/* <Fotter/> */}
    </div>
  )
}

export default App
