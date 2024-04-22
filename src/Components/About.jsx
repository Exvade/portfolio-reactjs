import Me from './Me';
import LangTools from './LangTools';
import CertifSection from './CertifSection';
export default function About() {
  return (
    <section id="about" className="pb-5 pt-28">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-5 ">
            <Me/>
            <LangTools />
            <CertifSection />
          </div>
        </div>
      </div>
    </section>
  )
}