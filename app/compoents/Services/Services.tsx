
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: 'bx-code-alt',
      title: 'Front End Development',
      description: 'We craft user-friendly websites, using the latest tech and design, to elevate your online presence and exceed your expectations.',
    },
    {
      icon: 'bxs-paint',
      title: 'Video Editing',
      description: 'Raise Up your narrating with our video altering administrations. We change crude film into enthralling, cleaned recordings that connect with and dazzle your crowd.',
    },
    {
      icon: 'bx-bar-chart-alt',
      title: 'UI/UX Design',
      description: 'Work in natural, client centered UI/UX arrangements, conveying consistent, effective advanced encounters that fit usefulness with feel for ideal commitment.',
    },
  ];

  return (
    <div id="services" className="w-full min-h-screen bg-bgColor  py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-main text-3xl sm:text-4xl font-bold text-center mb-12 animate-slideInDown">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-second text-white p-6 rounded-xl hover:border-2 hover:border-main transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fadeIn" style={{animationDelay: `${index * 300}ms`}}>
              <div className="mb-6 flex justify-center">
                <i className={`bx ${service.icon} text-5xl text-main animate-bounce`}></i>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
              <p className="text-center mb-6">{service.description}</p>
              <div className="flex justify-center">
                <Link href="/services">
                  <button className="px-6 py-2  hover:shadow-main hover:shadow-md bg-main text-bgColor rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110 ">
                    Learn More
                  </button>
                </Link>  
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}