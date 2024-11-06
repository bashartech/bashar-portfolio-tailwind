import styles from './services.module.css';
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
    <div id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className={styles.iconContainer}>
                <i className={`bx ${service.icon} ${styles.icon}`}></i>
              </div>
<<<<<<< HEAD
              <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
              <p className="text-center mb-6">{service.description}</p>
              <div className="flex justify-center">
                <Link href={"/services"}>
                  <button className="px-6 py-2  hover:shadow-main hover:shadow-md bg-main text-bgColor rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-110 ">
=======
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.buttonContainer}>
                <Link href="/services">
                  <button className={styles.learnMoreButton}>
>>>>>>> a9cef2e0210e9a036b212a7261201a5afab849fc
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