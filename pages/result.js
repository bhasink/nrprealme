import { useState, useRef, createRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { saveAs } from 'file-saver'
import axios from "axios"
import { useScreenshot, createFileName } from 'use-react-screenshot'

export default function Home() {
  const [image, setImage] = useState('')
  const [imageURL, setImageURL] = useState('')


  useEffect(() => {
    let value
    let valuet
    // Get the value from local storage if it exists
    value = localStorage.getItem('imaget') || ''
    setImage(value)

    valuet = localStorage.getItem('imagett') || ''
    setImageURL(valuet)


    // if(value != ''){
    //   getImagee(value)
    // }
  
  }, [])

  const download = async(image, { name = "realme", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  
  const getImagee = async(value) => { 
    
   
   
    // takeScreenshot(ref.current)

    // window.localStorage.setItem("imaget", imaget);

    // let formData = new FormData()
    // formData.append('image', value)

  //   fetch('https://phpstack-709751-3121510.cloudwaysapps.com/api/realme', {
  //     method: 'post',
  //     headers: {'Content-Type':'application/json'},
  //     body: formData
  //  }).then(response => response.json())
  //  .then(data => window.localStorage.setItem("imaget", data.data.img));


    // try {
    //   const { data } = await axios.post('https://phpstack-709751-3121510.cloudwaysapps.com/api/realme', formData)
     
    //   console.log(data);
    //   setImageURL(data.data.img);

     
    //   console.log(data)
    // } catch (err) {
    //   console.log(err)
    // }

  }

  


  const downloadImage = async () => {


  

    const a = document.createElement("a");
    a.href = imageURL;
    a.download = createFileName("png", "realme");
    a.click();

    // saveAs(image, 'realme.png')
    // const imageUrl = "https://phpstack-709751-3121510.cloudwaysapps.com/chat_img/64814476715c2.png";

    // await fetch(imageUrl)
    // .then((response) => response.blob())
    // .then((blob) => {
    //   let url = window.URL.createObjectURL(blob);
    //   let a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'realme.png';
    //   a.click();
    // });
     
  }

  return (
    <>
      <section className="memes-sec">
       
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
               <i class="fal fa-download"></i>
              </button>

              <a className="btn btn-register file-upload iconcm socl" href={`https://www.facebook.com/sharer/sharer.php?u=${image}&quote=Social share of realme ....`} target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>

              <a className="btn btn-register file-upload iconcm" href={'whatsapp://send?text='+encodeURIComponent(image)} data-action="share/whatsapp/share">
                <i class="fab fa-whatsapp"></i>
              </a>
			  
			  <a className="btn btn-register file-upload iconcm" href={`http://twitter.com/share?text=realme&url=${image}&hashtags=realmeLaunch,realmeLaunch,realmeLaunch`}>
                <i class="fab fa-twitter"></i>
              </a>
			  
			  
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
