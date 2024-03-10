import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, surname, role, description, description1, description2, social, photoLink } = about

  return (
    <div className='about center transparent-background'>

      {photoLink && (
        <img className='about__photo' src={photoLink} alt='CEZ_photo'/>
      )}

      {name && (
        <h1 className='about__fullname'>
          Hi, I am <span className='about__name'>{name + surname}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p id='about__desc__first' className='about__desc'>{description}</p>
      <p className='about__desc'>{description1}</p>
      <p className='about__desc'>{description2}</p>

      <div className='about__contact center'>
        {/* resume butonunu kullanabilmek için bu yorum satırlarını aç ve yukardaki = about kısmına resume ekle */}
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */} 

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon deneme'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon deneme'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='linkedin'
                className='link link--icon deneme'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TwitterIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
