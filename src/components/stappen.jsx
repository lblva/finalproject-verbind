import '../styles/stappen.css';

function Stappen() {
    return (
        <div className='container'>
            <p className='mainTitle'>Start in 3 stappen</p>
            <div className='cardsContainer'>
                <div className='card'>
                    <img src='/stap1.png' alt='stap 1' className='stappenImage'/>
                    <p className='cardTitle'>Maak je profiel aan</p>
                    <p className='cardText'>Voeg je voorkeuren, vaardigheden en beschikbaarheid toe.</p>
                </div>
                <div className='card'>
                    <img src='/stap2.png' alt='stap 2' className='stappenImage'/>
                    <p className='cardTitle'>Blader door vacatures</p>
                    <p className='cardText'>Ontdek kansen die passen bij jouw doelen.</p>
                </div>
                <div className='card'>
                    <img src='/stap3.png' alt='stap 3' className='stappenImage'/>
                    <p className='cardTitle'>Solliciteer direct</p>
                    <p className='cardText'>Neem contact op met werkgevers en bemachtig je volgende baan.</p>
                </div>
            </div>
        </div>
    );
};

export default Stappen;