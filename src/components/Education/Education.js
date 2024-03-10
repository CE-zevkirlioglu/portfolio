import uniqid from 'uniqid'
import { education } from '../../portfolio'
import EducationContainer from './EducationContainer'
import './Education.css'

const Educations = () => {
    if (!education.length) return null
  
    return (
      <section id='educations' className='section'>
        <h2 className='section__title'>Education</h2>
  
        <div className='education__grid'>
          {education.map((educations) => (
            <EducationContainer key={uniqid()} educations={educations} />
          ))}
        </div>
      </section>
    )
  }

export default Educations