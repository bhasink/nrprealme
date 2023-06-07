"use client"; 
import { useState, useRef, createRef} from 'react'
import {Camera} from "react-camera-pro";
import { useScreenshot } from 'use-react-screenshot'
import axios from "axios"
import Link from 'next/link'

export default function Photo() {

  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const ref = createRef(null)
  const [imaget, takeScreenshot] = useScreenshot()
  const getImage = async(e) => takeScreenshot(ref.current)
   
   
    // takeScreenshot(ref.current)

    // window.localStorage.setItem("imaget", imaget);

    // let formData = new FormData()
    // formData.append('image', imaget)

  //   fetch('https://phpstack-709751-3121510.cloudwaysapps.com/api/realme', {
  //     method: 'post',
  //     headers: {'Content-Type':'application/json'},
  //     body: formData
  //  }).then(response => response.json())
  //  .then(data => window.localStorage.setItem("imaget", data.data.img));


    // try {
    //   const { data } = await axios.post('https://phpstack-709751-3121510.cloudwaysapps.com/api/realme', formData)
     
    //   window.localStorage.setItem("imaget", data.data.img);

     
    //   console.log(data)
    // } catch (err) {
    //   console.log(err)
    // }

  // }

  if(imaget){
    window.localStorage.setItem("imaget", imaget);
  }


  return (
    <main>

      <div className='rmfds'>

      {/* <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <img width={{width:"100%"}} src={imaget} alt={'Screenshot'} />
      <div ref={ref}>
        <h1>use-react-screenshot</h1>
        <p>
          <strong>hook by @vre2h which allows to create screenshots</strong>
        </p>
      </div>
    </div> */}


        <div className='camdivst' ref={ref}>
        <Camera ref={camera} aspectRatio={"cover"} numberOfCamerasCallback={setNumberOfCameras} />
        <img src={"/arbigs.png"} alt='filter' style={{position:"relative"}} />

        </div>

        {/* <div className='outssdv'>
        <img  src={imaget} alt={'Screenshot'} className="genouts"/>
        
        </div> */}

       
       <div className='center-ctayl'>
        <button className='btn btn-register file-upload iconcm'  onClick={getImage}>
        <img src='./frontcmon.png'/>
        </button>

       
       {imaget && (
        <Link 
          href={{
            pathname: '/result',
          }}
          className='btn btn-register file-upload'>
          Result
        </Link>
        )}


       
       
       {/**<button className='btn btn-register file-upload' onClick={() => setImage(camera.current.takePhoto())}>Take photo</button> */} 
        
       
      </div>

      
      </div>

      {/* <img src={image} alt='Taken photo' /> */}


    </main>
  )
}
