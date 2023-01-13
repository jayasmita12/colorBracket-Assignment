import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Login } from './Login'
import { Navbar } from './Navbar'
import { Receipes } from './Receipes'
import { SingleReceipes } from './SingleReceipes'

export const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
       <Routes>
            <Route path="/" element={<Login/>} ></Route>
            <Route path="/receipes" element={<Receipes/>} ></Route>
            <Route path='/receipes/:id' element={<SingleReceipes/>}></Route>
        </Routes>
    </div>
  )
}
