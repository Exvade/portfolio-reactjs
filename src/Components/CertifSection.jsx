import rocket from '../img/rocket.png'
import CerData from '../CerData';
import Certification from './Certification';
export default function CertifSection() {
  const item = CerData
  return (
    <div className="self-center mt-16">
      <div className="flex items-center px-4">
        <img src={rocket} alt="" width="32px" className="mr-1" />
        <h4 className="text-xl font-semibold text-dark">Certification</h4>
      </div>
      <Certification item={item}/>
    </div>
  )
}