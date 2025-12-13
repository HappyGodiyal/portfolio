import React from 'react'
import ProfileHeader from './components/ProfileHeader'
import Contributions from './components/Contributions'
import Education from './components/Education'
import Skills from './components/Skills'
import AdHoc from './components/AdHoc'
import Projects from './components/Projects'
import Connect from './components/Connect'

const App = () => {
  return (
    <>
      <ProfileHeader />
      <div className=' max-w-[36rem] mx-auto my-3 h-px bg-gray-100'></div>
      <Contributions />
      <Education />
      <Projects />
      <AdHoc />
      <Skills />
      <Connect />
      <div className=' max-w-[36rem] mx-auto mt-2 mb-3 h-px bg-gray-100'></div>
      <div className=' max-w-[38rem] mx-auto my-3 py-3 text-center text-gray-500 text-xs'>
        © 2025 Happy Godiyal
      </div>
    </>
  )
}

export default App