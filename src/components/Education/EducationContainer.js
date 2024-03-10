// import uniqid from 'uniqid'
import './EducationContainer.css'

const EducationContainer = ({ educations }) => (
  <div className='education'>
    <h3>{educations.schoolName}</h3>

    <p className='education__description'>{educations.timeLine}</p>
    {educations.type && (
      <p className='education__description'>{educations.type}</p>
    )}
    
    <p className='education__description'>{educations.explanation}</p>

  </div>
)

export default EducationContainer