/* eslint-disable react/prop-types */
export default function Certification({item}){
  return(
    <div className="grid grid-cols-1 gap-2 px-4 mt-6 lg:grid-cols-4 lg:gap-4">
      {item.map((val) => (
        <a to={val.link} target="_blank" className="mb-5 overflow-hidden bg-white rounded-md shadow-lg sm:mb-0" key={val.id}>
        <img src={val.img} alt={val.alt} className="object-cover object-top w-full aspect-video" />
        <div className="flex items-center px-2 py-4">
          <div>
            <img src={val.logo} alt="" className="w-8 rounded-full aspect-square" />
          </div>
          <p className="px-2 py-2 text-sm font-medium lg:text-base" style={{color: val.text}} >{val.title}</p>
        </div>
      </a>
      ))}
    </div>
  )
}