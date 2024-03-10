import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {project.imgLink && (
      <img className='project__image' src={project.imgLink} alt='projectImage'/>
    )}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li id='deneme' key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LaunchIcon />
      </a>
    )}

{project.livePreview1 && (
      <a
        href={project.livePreview1}
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

export default ProjectContainer
