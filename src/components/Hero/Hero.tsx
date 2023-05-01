import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='container w-100 mt-28 md:py-10 bg-light dark:bg-dark tracking-wide'>
        <div className='flex justify-center items-center'>
        <img className='w-24' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO2az0oDMRDGv4PoRaj6AhX0YD332l70GfQBKoLUQ4V6rvi3QjFv6gPUDCPrVrHZbTe7Xd1mdj4IFDJJk19mkskSQKWaiY8BugPIyC52BHALSdlR9YP7TwgJkalXUQCuMgkFrtweIE3BAiDPGM6yUwBGPQAaAibAPaAsBRsCZUkTIaOZIDQVNnoXgG6CRk8B6DFoipyTdU+EqOiXlj+eSNHbYm4DUgAoxQN4A5h2ATsA6DUu0W/uxHWiPYAbgL1d3NYOY5u1BLCqotVdNvk5CB6ekFeVA5h2/Vdv2hEIwN44K30J8A7w3gC459QNBAKg8Xz/0eS/xdvO/48lAnjMAPD2q/5BIAB7nR4CnBYCfYEAuJ1jE2xLBLAH0MQDwCS2FQWAmwDd+3tAZBu1EQGAG8kN0KfwE8C7AgDYfrJv2wP4AODNWTkE7EUKhKvAAfB+st+PkyX2pykQmiEDOE+ufGYbxxP4LGAA1rn8RG6fpSgc5qANAwZALw6Arew2kc3cWJ5DBmCK9VnJWMjUqygAV7V/KMmtekD4eip7lFh/laqsV+ULX2NLkR0VfI0tRVT0nJUiUgBIXengPYBWTCmrPt+LjvtHCsCoB6DWIeArXwBiRXoM4m9dbN1l654Kc8Z3A71vqxCQPgEQH80PNFmuAAAAAABJRU5ErkJggg=="/>
        </div>
        <div className='mt-6'>
            <h1 className='md:text-center text-3xl md:text-5xl text-justify'>Video Sharing App</h1>
        </div>
        <div className='mt-4'>
            <h3 className='md:text-center md:text-2xl text-lg text-slate-500 text-justify'>Free and open source web application for video recording and sharing.</h3>
        </div>
        <div className='flex flex-col md:flex-row items-center md:justify-center  mt-8 '>
           <Link href='/home' className='button-colored md:mr-3 md:mb-0 mb-3 w-full md:w-[20%] text-center'>Get Started</Link>
            <button className='button w-full md:w-[20%]'>API Reference</button>
        </div>
    </div>
  )
}

export default Hero