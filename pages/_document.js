import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { useState,useEffect } from "react"
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
     

<Script strategy="lazyOnload">
       { 
       `
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-T7XL3QQ');
       
       
     
`}
</Script>



        </Head>

        <body className='sa'>


        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7XL3QQ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>


          <Main />
          <NextScript />

        

        </body>
      </Html>
    )
  }
}

export default MyDocument