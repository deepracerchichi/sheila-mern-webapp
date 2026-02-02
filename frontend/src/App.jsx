import React from 'react'
import toast from 'react-hot-toast'
import { Link, Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import AnimPage from './pages/AnimPage';

gsap.registerPlugin(useGSAP);

const App = () => {
  

  return (
    <div className='relative h-full w-full'>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" /> */}
      
      {/* <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" /> */}
      
      <div class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#bbff003e_1px,transparent_1px),linear-gradient(to_bottom,#bbff003e_1px,transparent_1px)] bg-[size:14px_24px]" />
      

      
      
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#ffffff33_10px,#00091d_1px)] bg-[size:50px_50px]" /> */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/anim" element={<AnimPage />} />
      </Routes>

      
      
    </div>
  )
}

export default App