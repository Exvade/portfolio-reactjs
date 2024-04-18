import AboutMe from './AboutMe';
export default function About() {
  return (
    <section id="about" className="pb-5 pt-28">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-5 ">
            <AboutMe/>
          </div>
        </div>
      </div>
    </section>
  )
}