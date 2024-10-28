import AboutPage from "../compoents/About/About";
import FooterPage from "../compoents/Footer/Footer";
import Header from "../compoents/Header/Header";
import Hero from "../compoents/Hero/Hero";
import PortfolioPage from "../compoents/Portfolio/Portfolio";
import ServicesPage from "../compoents/Services/Services";


export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutPage />
      <ServicesPage />
      <PortfolioPage />
      <FooterPage />
    </div>
  )
}
