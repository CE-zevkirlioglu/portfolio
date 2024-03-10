import uniqid from 'uniqid'
import { certificates } from '../../portfolio'
import CertificateContainer from './CertificateContainer'
import './Certificates.css'

const Certificates = () => {
  if (!certificates.length) return null

  return (
    <section id='certificates' className='section'>
      <h2 className='section__title'>Certificates</h2>

      <div className='certificates__grid'>
        {certificates.map((Certificate) => (
          <CertificateContainer key={uniqid()} Certificate={Certificate} />
        ))}
      </div>
    </section>
  )
}

export default Certificates
