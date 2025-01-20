import '../styles/hero.css'


function Hero() {  

  return (
    <>
      <div className="heroContainer">
        <div className="heroLinks">
          <div className='heroLinksInner'>
            <div className='heroTextContainer'>
            <p className='heroTitle'>Vind sneller werk met Verbind<br/>
            de brug tussen ambitie en succes</p>
            
              <p className='heroText'>Je zoektocht naar werk begint hier.<br/> Verbind helpt je sneller 
              werk te vinden door je te verbinden met vacatures die perfect bij jouw passen.  
              Vind de perfecte match met slechts één swipe.</p>
             </div>
            <div className='getTheAppContainer'>
             <div className='getTheApp'>
              <p className='heroText'>Get the app &rarr;</p>
             </div>
             <img src='/qrCode.png' alt='qrCode' className='qrCode'/>
            </div>
          </div>
        </div>
        <div className="heroRechts">
          <img src="/heroImage.png" alt="heroImage" className='heroImage'/>
        </div>
      </div>
    </>
  )
}

export default Hero
