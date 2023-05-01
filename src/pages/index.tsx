import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Header/Navbar'
import Hero from '@/components/Hero/Hero'
import Hero2 from '@/components/Hero/Hero2'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

  return (
    <>
      <Head>
        <title>Video Streaming App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      </Head>
      <main>
      <div className={`${darkMode ? "dark" : "light"}`}
    >
        <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero/>
        {/* <Hero2/> */}
        </div>
      </main>
    </>
  )
}
