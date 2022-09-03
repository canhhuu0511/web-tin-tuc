import React, { useEffect } from 'react'

const Comment = ({href}) => {
  useEffect(() => {
    const initFaceBookSDK = () =>{
        if(window.FB){
            window.FB.XFBML.parse();
        }
        let locale = 'vi_VN' ;
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 571968774048843,
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use version 2.1
            });
        };
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = `//connect.facebook.net/${locale}/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    initFaceBookSDK();
  });
     
  return (
    <div className="fb-comments" data-href={href} data-width="100%" data-numposts={5} />
  )
}

export default Comment