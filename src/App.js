import SectionIntro from './components/Section-Intro/Section-Intro';
import './App.css';
import SectionDescription from './components/Section-Description/Section-Description';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Choose Your Local Targeting',
    description: 'Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.'
  },
  {
    id: '2',
    title: 'Track Your Conversion',
    description: 'We use the most progressive tracking and analytics technology to ensure that every call can be tracked and evaluated'
  },
  {
    id: '3',
    title: 'Customized Campaigns',
    description: 'Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we’ll do the rest.'
  },
  {
    id: '4',
    title: 'Get Dedicated Support Team',
    description: 'We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.'
  },
  {
    id: '5',
    title: 'Quality Assurance',
    description: 'We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that have been vetted.'
  },
]

function App() {
  return (
    <div className='main-container'>
      <SectionIntro />
      <SectionDescription sectionData={DUMMY_DATA}/>
    </div>
  );
}

export default App;
