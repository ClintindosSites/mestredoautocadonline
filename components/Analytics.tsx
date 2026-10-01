"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HWXYCWFKX0"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());

          // GA4
          gtag('config', 'G-HWXYCWFKX0');
          gtag('config', 'G-3P5VRB3EH9');

          // Google Ads
          gtag('config', 'AW-17677408224');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){
              n.callMethod
              ? n.callMethod.apply(n,arguments)
              : n.queue.push(arguments)
            };

            if(!f._fbq)f._fbq=n;

            n.push=n;
            n.loaded=true;
            n.version='2.0';
            n.queue=[];

            t=b.createElement(e);
            t.async=true;
            t.src=v;

            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);

          }(
            window,
            document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js'
          );

          fbq('init', '1035243079482901');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}
