import Document, { Html, Head, Main, NextScript } from 'next/document'
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