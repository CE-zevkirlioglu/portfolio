import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import './CertificateContainer.css'

const CertificateContainer = ({ Certificate }) => (
  <div className='certificate'>
    <h3>{Certificate.name}</h3>

    {Certificate.imgLink && (
      <img className='certificate__image' src={Certificate.imgLink} alt='certificateImage'/>
    )}

    <p className='certificate__description'>{Certificate.description}</p>
    {Certificate.stack && (
      <ul className='certificate__stack'>
        {Certificate.stack.map((item) => (
          <li id='stack_text_color' key={uniqid()} className='certificate__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {Certificate.livePreview && (
      <a
        href={Certificate.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LaunchIcon />
      </a>
    )}
    
  </div>
)

export default CertificateContainer
