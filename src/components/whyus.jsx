import '../styles/whyus.css';

function WhyUs() {
    return (
        <div className='whyusContainer'>
            <div className='whyusInnerContainer'>
                <img src='happyColleagues.jpg' alt='happy colleagues' className='whyusImage'/>
                <div className='whyusRightContainer'>
                <p className = 'whyusTitle'>Waarom voor Verbind kiezen?</p>
                <div className = 'whyusSubtitleContainer'>
                    <img src='swipeIcon.png' alt='swipe' className='whyusIcon'/>
                    <p className='whyusSubtitle'>Swipe-functionaliteit</p>
                </div>
                <p className='whyusText'>Verken vacatures snel en eenvoudig met een leuke en efficiënte swipe-ervaring.</p>

                <div className = 'whyusSubtitleContainer'>
                    <img src='ontwerpIcon.png' alt='swipe' className='whyusIconRectangle'/>
                    <p className='whyusSubtitle'>Gebruiksvriendelijk Ontwerp</p>
                </div>
                <p className='whyusText'>Geniet van een overzichtelijke en gebruiksvriendelijke interface die werk zoeken moeiteloos maakt.</p>

                <div className = 'whyusSubtitleContainer'>
                    <img src='chatIcon.png' alt='swipe' className='whyusIcon'/>
                    <p className='whyusSubtitle'>Eenvoudig Communiceren</p>
                </div>
                <p className='whyusText'>Heb je vragen? Gebruik de chatfunctie om snel en eenvoudig contact op te nemen met werkgevers.</p>

                </div>
            </div> 
        </div>
    );
};

export default WhyUs;