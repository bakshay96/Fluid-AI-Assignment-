import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import SingleMovie from '../Pages/SingleMovie';
import { Test } from '../Pages/Test';

 const MainRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  )
}

export default MainRoutes;
