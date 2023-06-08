import { useEffect } from 'react'
import Head from "next/head";

import Script from 'next/script'


import { useRouter } from 'next/router'

// import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {

   
    return (
    
    <>


<Script strategy="afterInteractive">
       { 
       `
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-T7XL3QQ');
       
       
     
`}
</Script>


        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Realme</title>
        <link rel="icon" type="image/png" sizes="32x32" href="./images/hofavicon.png"></link>
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css" />
            <link href="https://kit-pro.fontawesome.com/releases/v5.11.2/css/pro.min.css?ver=5.3.2" rel="stylesheet" type="text/css" />
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap" rel="stylesheet"/>

            <link rel="stylesheet" type="text/css" href={`/style.css`} />

            
           
        </Head>
        
    
        <Component {...pageProps} />
    </>
        
    );
}

export default MyApp;