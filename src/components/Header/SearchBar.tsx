import React from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import Link  from 'next/link'
import { useRouter} from 'next/router'
import { BsTypeH1 } from 'react-icons/bs'


const Search = (props: any) => {

    const Reload = ()=>{
        window.location.reload()
    }
  return (
    <>
    <div className='px-72 flex items-center'>
        <div className='mx-1'>
            <button className='text-dark cursor-pointer' onClick={Reload}><IoMdArrowRoundBack style={{fontSize:30}}/></button>
        </div>
    </div>
  <div className='px-72 container grid grid-cols-1 gap-4 mb-52'>
  <hr />
    {
      props.data.length > 0 ? props.data.map(d=>(
          <Link className='hover:bg-slate-100 px-4 py-4 rounded-lg' href={"/watch/" + d._id}>
          <div className='flex  gap-4'>
            <div className=''>
              <img className="rounded-xl" src={d.imageURL} alt="" />
            </div>
            <div className=' w-full text-slate-500 text-justify'>
              <h1 className='text-xl text-black'>{d.title}</h1>
                <small className='text-muted'>{d.views} views | {d.Date ? d.Date.slice(0,10): d.Date}</small>
                <p className='mt-2 '>{d.disp}</p>
            </div>
    </div>
          </Link>
        )):null
      }
  </div>
    </>
  )
}

export default Search