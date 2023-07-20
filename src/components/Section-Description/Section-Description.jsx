// import { useState } from 'react'
import IconP1 from '../../CustomAssets/Icon1'
import IconP2 from '../../CustomAssets/Icon2'
import IconP3 from '../../CustomAssets/Icon3'
// import SectionModule from '../Section-Module/Section-Modules'
// import IconP4 from '../../CustomAssets/Icon4'
// import IconP5 from '../../CustomAssets/Icon5'
import './Section-Description.css'

const SectionDescription = props => {
  // const [ hoverState, setHoverState] = useState({
  //   p1: false,
  //   p2: false,
  //   p3: false,
  //   p4: false,
  //   p5: false,
  // })

  // const handleMouseOver = (e) => {
  //   // console.log('p : ', e.target.id)
  //   setHoverState(prevState => {
  //     return {...prevState, [e.target.id]: true}
  //   })
  // }

  // const handleMouseOut = (e) => {
  //   setHoverState(prevState => {
  //     return {...prevState, [e.target.id]: false}
  //   })
  // }

  return (
    <div className='section-description'>
      <div className='section-description__container'>
        <div className='section-description__intro'></div>
        {/* { props.sectionData.map(sect => <SectionModule data={sect} key={sect.id}/>) } */}
        <div className='section-description__module bg-alt'>
          <div className='section-description__module-item'>
            <div className='section-description__module-item-icon'>
              <div className='module-icon'>
                <IconP2 />                
              </div>
              <h3>Choose Your Local Targeting</h3>
            </div>
            <p>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
          </div>
        </div>
        <div className='section-description__module bg-alt'>
          <div className='section-description__module-item'>
            <div className='section-description__module-item-icon'>
              <div className='module-icon'>
                <IconP1 />                
              </div>
              <h3>Choose Your Local Targeting</h3>
            </div>
            <p>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
          </div>
        </div>
        <div className='section-description__module'>
          <div className='section-description__module-item'>
            <div className='section-description__module-item-icon'>
              <div className='module-icon'>
                <IconP3 />                
              </div>
              <h3>Choose Your Local Targeting</h3>
            </div>
            <p>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
          </div>
        </div>
        <div className='section-description__module bg-alt'>
          <div className='section-description__module-item'>
            <div className='section-description__module-item-icon'>
              <div className='module-icon'>
                <IconP3 />                
              </div>
              <h3>Choose Your Local Targeting</h3>
            </div>
            <p>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
          </div>
        </div>
        <div className='section-description__module'>
          <div className='section-description__module-item'>
            <div className='section-description__module-item-icon'>
              <div className='module-icon'>
                <IconP3 />                
              </div>
              <h3>Choose Your Local Targeting</h3>
            </div>
            <p>Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDescription