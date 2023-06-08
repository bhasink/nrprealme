'use client'
import { useState, useRef, createRef, useEffect } from 'react'
// import {Camera} from "react-camera-pro";
import { useScreenshot, createFileName } from 'use-react-screenshot'
import axios from 'axios'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { CirclesWithBar } from 'react-loader-spinner'
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css'

export default function Photo() {
  const camera = useRef(null)
  const [image, setImage] = useState(null)
  const [numberOfCameras, setNumberOfCameras] = useState(0)
  const ref = createRef(null)
  const [imaget, takeScreenshot] = useScreenshot({
    quality: 1.0,
  })
  const router = useRouter()
  const [dataUri, setDataUri] = useState('')

  useEffect(() => {
    if (imaget != null) {
      saveImg(imaget)
    }
  }, [imaget])

  const handleTakePhotoAnimationDone = (dataUri) => {
    console.log(dataUri)
    setDataUri(dataUri)
  }

  const download = async (
    image,
    { name = 'realme', extension = 'jpg' } = {},
  ) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const getImage = () => takeScreenshot(ref.current)

  const saveImg = async (im) => {
    // takeScreenshot(ref.current)

    // window.localStorage.setItem("imaget", imaget);

    let formData = new FormData()
    formData.append('image', imaget)

    //   fetch('https://phpstack-709751-3121510.cloudwaysapps.com/api/realme', {
    //     method: 'post',
    //     headers: {'Content-Type':'application/json'},
    //     body: formData
    //  }).then(response => response.json())
    //  .then(data => window.localStorage.setItem("imaget", data.data.img));

    try {
      const { data } = await axios.post(
        'https://phpstack-709751-3121510.cloudwaysapps.com/api/realme',
        formData,
      )

      window.localStorage.setItem('imaget', data.data.img)

      router.push('/result')

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  if (imaget) {
    window.localStorage.setItem('imagett', imaget)
  }

  return (
    <main>
      <div className="rmfds">
       

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

        <div className="camdivst" ref={ref}>
          {/* <Camera ref={camera} facingMode={"environment"}  numberOfCamerasCallback={setNumberOfCameras} /> */}
         
          <Camera
          idealResolution={{ width: 400, height: 650 }}
          // onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={false}
          isImageMirror = {false}
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
        />
          <img
            className='topframes'
            src={'/arbigsnws.png'}
            alt="filter"
            style={{  zIndex: 8 }}
          />
        </div>

        {/* <div className='outssdv'>
        <img  src={imaget} alt={'Screenshot'} className="genouts"/>
        
        </div> */}

        <div className="center-ctayl">
          {!imaget && (
            <button
              className="btn btn-register file-upload iconcm"
              onClick={getImage}
            >
              <i class="fas fa-camera"></i>
            </button>
          )}

          {imaget && (
            // <Link
            //   href={{
            //     pathname: '/result',
            //   }}
            //   className='btn btn-register file-upload'>
            //   Result
            // </Link>
            <CirclesWithBar
              height="50"
              width="50"
              color="#ffc915"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel="circles-with-bar-loading"
            />
          )}

          {/* <button className='btn btn-register file-upload iconcm bcmp'   
        
        disabled={numberOfCameras <= 1}
        onClick={() => {
          if (camera.current) {
            const result = camera.current.switchCamera();
            console.log(result);
          }
        }}
        
        >

        <img src='./flipcmct.png'/>
      </button>  */}

          {/**<button className='btn btn-register file-upload' onClick={() => setImage(camera.current.takePhoto())}>Take photo</button> */}
        </div>
      </div>

      {/* <img src={image} alt='Taken photo' /> */}
    </main>
  )
}
