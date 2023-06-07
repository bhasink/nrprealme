import Link from 'next/link'

export default function Home() {

  return (
    <>
      <section className="memes-sec">
        <div className="head-con">
          <h1>NARZO POSTER MAKER</h1>
          <p className="campaign-text">BE THE FACE OF NARZO</p>
        </div>
        <div className="panel-cont">
          <div className="justify-content-center mb-3 maindiv">
            <div className="leftsimg">
              <img src="/cb.jpg" alt />
            </div>
            <div className="flx-cont">
              <div className="">

<Link href="/photo" className='btn btn-register file-upload'>
Click Photo
</Link>

              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  )
}