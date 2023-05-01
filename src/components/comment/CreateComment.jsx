import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const Comment = ({v_Id}) => {
  const [comment, setComment] = React.useState({})
  const [userData, setUserData] = React.useState()
  const [CommentResData, setCommentResData] = React.useState({})
  
  const handleSubmit = async(e) =>{
    e.preventDefault()

    const idd= v_Id
    
const username={
      name: window.localStorage.getItem("name")
    }
    const id ={
      userID: window.localStorage.getItem("user")
    }
    const vidId={
        videoId: idd
    }

    const mergeobj={
     ...username, ...id, ...vidId, ...comment
    }
    console.log(mergeobj)
    await axios.post("https://videostreamingapp.onrender.com/comment", mergeobj).then(res=>setCommentResData(res.data)).catch(err=>console.log(err))
    // await axios.post(`http://localhost:8000/comment/${window.localStorage.getItem("user")}`, username).then(res=>console.log(res.data)).catch(err=>console.log(err))
  }
  

  
  

  const handleChange = (e) =>{
    const value = e.target.value
    const name = e.target.name
setComment({...comment, [name]:value})
  }

  return (
    <div className='mx-2 md:mx-0 mt-10'>
      <h5 className='text-xl my-2 font-semibold '>Comments</h5>
<form onSubmit={handleSubmit} method="post">
<input type="text" onChange={handleChange} name="desc" className='px-2 md:px-4  w-full py-2 bg-slate-100' style={{border:"none", borderRadius:8}} placeholder='Add a comment' />
      <button className='bg-[green] px-4 py-2 mt-2 rounded-lg text-white'>Comment</button>
</form>
    
    </div>
  )
}

export default Comment