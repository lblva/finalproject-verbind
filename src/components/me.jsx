import '../styles/me.css'


function Me() {  
    function downloadPortfolio() {
        const link = document.createElement('a');
        link.href = '/portfolio.pdf'; // Path to your PDF
        link.download = 'Lola_Batchalova_Portfolio.pdf'; // Desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    
  return (
    <>
      <div className="meContainer">
        <div className="meLinks">
          <div className='meLinksInner'>
            <div className='meTextContainer'>
            <p className='meTitle'>About me</p>
            
              <p className='meText'>Hallo! Ik ben Lola Batchalova, studente grafische en digitale media aan AP Hogeschool. <br/>
              Als UX UI designer en webdeveloper combineer ik mijn passie voor creativiteit met techniek om gebruiksvriendelijke
              digitale ervaringen te creëren. Ik ben leergierig en sta altijd open voor nieuwe uitdagingen en manieren om mijn
              vaardigheden verder te ontwikkelen. <br/> <br/> Buiten mijn studie en werk ontdek ik graag nieuwe interesses, zoals
              boeken lezen, wandelingen maken of series kijken. Als je meer wilt weten of wilt samenwerken, neem gerust contact met me op!</p>
             </div>
            <div className='getTheAppContainer'>
             <div className="downloadButton" onClick={() => downloadPortfolio()}>
              Download Portfolio
            </div>
            </div>
          </div>
        </div>
        <div className="meRechts">
            <div className='imageContainer'>
          <img src="/me.jpg" alt="image of the designer" className='meImage'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Me
