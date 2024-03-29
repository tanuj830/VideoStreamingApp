import{ ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from 'react'
import {storage} from "../../firebase"
import { useEffect } from "react";
import axios from "axios"
import Navbar from "../Header/Navbar";
const Create = () => {

    const [progresspercentvideo, setProgresspercentvideo] = React.useState(0)
    const [progresspercentImage, setProgresspercentImage] = React.useState(0)
    const [progresspercentChannelImage, setProgresspercentChannelImage] = React.useState(0)
    const [data, setData] = React.useState({})
    const [video, setVideo] = React.useState({})
    const [image, setImage] = React.useState({})
    const [channelImage, setChannelImage] = React.useState({})
    const [userID, setUserID] = React.useState({})
  
// uploading video
    const handleVideo = (e) =>{
      e.preventDefault()
        const file = e.target?.files[0]
    
        if (!file) return;
        
        
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercentvideo(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadedUrl) => {
              console.log(downloadedUrl)
              setVideo({videoURL: downloadedUrl})
            });
          }
        )
        // console.log(video)
    }
  

    // uploading image
    const handleImage = (e) =>{

      const file = e.target.files[0]
  
      if (!file) return;
      
      
      const storeRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storeRef, file);
      
      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercentImage(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadedUrl) => {
            console.log(storeRef)
            setImage({imageURL: downloadedUrl})
          });
        }
      )
  }

   // uploading channel image
//    const handleChannelImage = (e) =>{

//     const file = e.target.files[0]

//     if (!file) return;
    
    
//     const storageRef = ref(storage, `files/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);
    
//     uploadTask.on("state_changed",
//       (snapshot) => {
//         const progress =
//           Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//         setProgresspercentChannelImage(progress);
//       },
//       (error) => {
//         alert(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadedUrl) => {
//           setChannelImage({imageURL: downloadedUrl})
//         });
//       }
//     )
// }

  
    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setData({...data, [name]:value})
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault()

        const loginID = window.localStorage.getItem("user")
        setUserID({userID: loginID})

        const Data = Object.assign({}, data,video, image, userID)
        console.log(Data)
        axios.post("https://videostreamingapp.onrender.com/channel/create",Data).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
  return (
    <div>
<Navbar />
       
       <div className=' mt-5 container flex justify-center items-center flex-col'>
<div className='row' style={{borderBottom:"1px solid grey"}} >
<h1 className='text-2xl ' >Upload Video</h1>
</div>

<form action="post" onSubmit={handleSubmit}>


<div className=' mt-4'>
<div className=''>
  <label>Title</label>
<input type="text" className="p-4  rounded-lg mt-1" style={{border:"1px solid grey", width:"100%", height:"90%"}} placeholder="Title of your content" name="title" onChange={handleChange} />
</div>
</div>

<div className='row mt-5'>
<div className='col'>
  <label>Discription</label>
<input type="text" name="disp" className=" text-dark p-4  rounded-lg mt-1" style={{border:"solid 1px grey", width:"100%", height:"100%"}} placeholder="Tell viewers about your video" onChange={handleChange} />
</div>
</div>

<div className='row mt-5'>
<div className='col'>
  <label>Add tags</label>
<input type="text" name="tags" className="text-dark p-4  rounded-lg mt-1" style={{border:"solid 1px grey", width:"100%", height:"100%"}} placeholder="Write tags for better reach" onChange={handleChange} />
</div>
</div>


<div className='row mt-5'>
<div className='col'>
  <label>Upload video</label>
  <p style={{fontSize:13, color:"grey"}}>Select video. Try to upload a video with aspect ratio 16:9</p>
<input type="file" name="videoURL" onChange={handleVideo} />
{
  progresspercentvideo != 0 ? <p className='lead' style={{fontSize:13}}>{progresspercentvideo}% uploaded</p> : null
}
</div>
</div>


<div className='row mt-4'>
<div className='col'>
  <label>Add thumbnail</label>
  <p style={{fontSize:13, color:"grey"}}>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.</p>
<input type="file" name="videoURL" onChange={handleImage} />
</div>
</div>
<button className="mt-3 bg-[green] px-4 py-2  text-white rounded-lg hover:shadow-xl">Submit</button>


</form>
       </div>
    </div>
  )
}

export default Create