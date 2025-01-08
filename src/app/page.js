import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import OurClients from "@/components/OurClients";
import OurStack from "@/components/OurStack";
import ContactUs from "@/components/ContactUs";
import MyTeam from "@/components/MyTeam";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <CallToAction />
      <MyTeam/>
      <OurStack/>
      <HowItWorks />
      <OurClients/>
      <Testimonials />
      <ContactUs/>
      <Footer />
    </>
  );
}
