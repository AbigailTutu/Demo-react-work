/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Courses from './Courses'
import Hostels from './Hostels'
import ContactUs from './ContactUs'
import LearnMore from './LearnMore'
import ApplyNow from './ApplyNow'
import Comments from './Comments'

const Routings = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/hostels' element={<Hostels/>}/>
      <Route path='/applyNow' element={<ApplyNow/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/learnMore' element={<LearnMore/>}/>
      <Route path='/comments' element={<Comments/>}/>
    </Routes>
  )
}

export default Routings
