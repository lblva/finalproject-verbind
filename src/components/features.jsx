import '../styles/features.css';
import { useState } from 'react';

function Features() {
  // Define state to track the active feature
  const [activeFeature, setActiveFeature] = useState('Match');

  // A function to render the content with title and image for each feature
  const renderFeatureContent = () => {
    if (activeFeature === 'Match') {
      return (
        <div className='outerContainer'>
          <div className='innerContainer'>
              <img src="/holdingmatchphone.png" alt="Match image" className='image' />
              <div className='textContainer'> 
                  <p className='title'>De perfecte match</p>
                  <p className='description'>Met de unieke matchfunctie van Verbind wordt je zoektocht naar werk persoonlijker dan ooit. 
                  Door je vaardigheden, voorkeuren en ervaring te koppelen aan de meest geschikte vacatures, helpt Verbind je sneller de 
                  ideale baan te vinden. Vergeet het eindeloze zoeken; met één simpele swipe ontdek je de vacatures die echt bij je passen!</p>
              </div>
          </div>
        </div>
      );
    } else if (activeFeature === 'Beschikbaarheid') {
      return (
        <div className='outerContainer'>
          <div className='innerContainer'>
              <img src="/holdingbeschikbaarheidphone.png" alt="beschikbaarheid image" className='image' />
              <div className='textContainer'> 
                  <p className='title'>Kies zelf wanneer je werkt</p>
                  <p className='description'>Met Verbind heb je de volledige vrijheid om je beschikbaarheid zelf in te stellen. 
                  Of je nu fulltime, parttime of tijdelijk beschikbaar bent, de app past zich moeiteloos aan jouw agenda aan. 
                  Zo kun je werk vinden dat perfect in je planning past, zonder vaste werktijden. Krijg de flexibiliteit om werk 
                  te vinden dat je privéleven aanvult en jouw ideale werk-privébalans ondersteunt.</p>
              </div>
          </div>
        </div>
      );
    } else if (activeFeature === 'Learning') {
      return (
        <div className='outerContainer'>
          <div className='innerContainer'>
              <img src="/holdinglearnphone.png" alt="Match image" className='image' />
              <div className='textContainer'> 
                  <p className='title'>Versterk je sollicitatie</p>
                  <p className='description'>Bereid je optimaal voor op je volgende sollicitatie met waardevolle tips en adviezen. 
                  Verbind biedt informatieve video&apos;s over cv&apos;s, sollicitaties en meer, zodat je goed voorbereid 
                  aan je zoektocht kunt beginnen. Daarnaast kun je je cv uploaden voor een professionele beoordeling, 
                  zodat je je kansen vergroot en solliciteert met een sterk profiel.</p>
              </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="featuresContainer">
      <div className="button-container">
        {/* Buttons to change active feature */}
        <button 
          className={activeFeature === 'Match' ? 'active' : 'inactive'} 
          onClick={() => setActiveFeature('Match')}
        >
          Match
        </button>
        <button 
          className={activeFeature === 'Beschikbaarheid' ? 'active' : 'inactive'} 
          onClick={() => setActiveFeature('Beschikbaarheid')}
        >
          Beschikbaarheid
        </button>
        <button 
          className={activeFeature === 'Learning' ? 'active' : 'inactive'} 
          onClick={() => setActiveFeature('Learning')}
        >
          Learning
        </button>
      </div>

      <div className="feature-info">
        {/* Render content based on active feature */}
        {renderFeatureContent()}
      </div>
    </div>
  );
}

export default Features;
