import './Section-Modules.css'
import IconP2 from '../../CustomAssets/Icon2'

const SectionModule = ( props ) => {
  const SECTION_DATA = props.data

  return (
    <div className={props.className}>
      <div className='section-description__module bg-alt'>
        <div className='section-description__module-item'>
          <div className='section-description__module-item-icon'>
            <div className='module-icon'>
              <IconP2 />
            </div>
            <h3>{SECTION_DATA.title}</h3>
          </div>
          <p>{SECTION_DATA.description}</p>
        </div>
      </div>
    </div>
  )
}

export default SectionModule