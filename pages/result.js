import { useState, useRef, createRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { saveAs } from 'file-saver'

export default function Home() {
  const [image, setImage] = useState('')

  useEffect(() => {
    let value
    // Get the value from local storage if it exists
    value = localStorage.getItem('imaget') || ''
    setImage(value)
  }, [])

  const downloadImage = () => {
    saveAs(image, 'realme.jpg')
  }

  return (
    <>
      <section className="memes-sec">
        <div className="head-con">
          <h1>NARZO POSTER MAKER</h1>
          <p className="campaign-text">BE THE FACE OF NARZO</p>
        </div>
        <div className="panel-cont">
          <div className=" justify-content-center mb-3 maindiv">
            <div className="leftsimg">
              <img src={image} alt />
            </div>

            <div className="center-ctayl newcts">
              <Link href="/photo" className="btn btn-register file-upload" >
                Click Again
              </Link>

              <Link
                href="#"
                onClick={() => {
                  navigator.clipboard.writeText(image)
                  alert('Link copied!')
                }}
                className="btn btn-register file-upload"
              >
                Copy link
              </Link>

             
            </div>
			
			<div className="center-ctayl newcts">
             

              <button className="btn btn-register file-upload iconcm" onClick={downloadImage}>
                <img src="./download-solid.png" />
              </button>

              <a className="btn btn-register file-upload iconcm socl" href={`https://www.facebook.com/sharer/sharer.php?u=${image}&quote=Social share of realme ....`} target="_blank">
                <img src="./facebook-f.png" />
              </a>

              <a className="btn btn-register file-upload iconcm" href={`http://twitter.com/share?text=realme new mobile launch&url=${image}&hashtags=realmeLaunch,realmeLaunch2,realmeLaunch33`}>
                <img src="./twitter.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
