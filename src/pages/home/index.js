import React from 'react'
import Link from "next/link"
import axios from "axios"
import { useEffect } from 'react'
import Navbar from '../../components/Header/Navbar'

const Main = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
  
   axios.get("https://videostreamingapp.onrender.com/channel/videos/all").then(res=>setData(res.data)).catch(err=>console.log(err))
   console.log(data)
  },[])
  

  const handleclick = () =>{

  }

  return (

   <>
   <Navbar/>
   <div className='container mt-10' >
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5' >

{
  data.map(i=>(
  
    <div className='border rounded-lg text-justify overflow-hidden hover:shadow-md hover:rounded-xl text-slate-500'  key={i._id}>
                <Link className=''  href={`/watch/${i._id}`}>
                <div className=" card " style={{borderRadius:"10px"}} onClick={handleclick}>
    <img  src={i.imageURL} className="w-full shadow-sm hover:rounded-lg " alt="..."/>
    <div className="p-3"  >
      <h5 className="text-md  text-black">{i.title}</h5>
    <small>{i.views} Views | {i.likes} Likes</small>
        <div className='d-flex'>
        <small className=' mt-1'  id='smallText'>Posted On {i.Date.slice(0,10)}</small>
        </div>
    </div>
  </div>
              </Link>
            </div>
  ))
}   
     </div>
    </div>
   </>
  )
}

export default Main