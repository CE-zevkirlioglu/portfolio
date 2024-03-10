import uniqid from 'uniqid'
import { myBackend, myFronted, myOthers, skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <section className='sectionOf__subtitle'>
        <h3 className='section__subtitle '>Fronted

          <section>
            <ul className='skills__list'>
            {myFronted.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
            ))}
            </ul>
          </section>

        </h3>
        <h3 className='section__subtitle '>Backend
          <section>
              <ul className='skills__list'>
              {myBackend.map((skill) => (
              <li key={uniqid()} className='skills__list-item btn btn--plain'>
                {skill}
              </li>
              ))}
              </ul>
          </section>
        </h3>
        <h3 className='section__subtitle'>Others
          <section>
                <ul className='skills__list'>
                {myOthers.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
                ))}
                </ul>
            </section>
        </h3>
      </section>
      
      {/* Direkt skills başlığı altında portfolio'da bulunan skills'leri yazdırmak için */}
      {/* <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default Skills
