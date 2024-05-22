import React, { useEffect } from 'react';
import style from './Heading.module.css';

const Heading = () => {
  useEffect(() => {
    // Check if the AdSense script is already in the document
    const scriptId = 'adsbygoogle-script';
    if (!document.getElementById(scriptId)) {
      // Create script element
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3485555502925175';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize ads when the script has loaded
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      };
    } else {
      // If script already exists, directly initialize ads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div>
      <h3 className={style.heading}>&lt;Secure <span>Nest</span>/&gt;</h3>
      
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-3485555502925175"
           data-ad-slot="1197850142"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default Heading;
