import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestmonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection"
import { features } from "../assets/data";
const Landing = () =>{
    return ( 
        
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100 ">
            {/* HeroSection*/}
            <HeroSection/>

            {/* Features Section features={features}*/}
            <FeaturesSection features = {features}/> 

            {/* Pricing Section*/}
            <PricingSection/>

            {/* Testimonials section*/}
            <TestmonialsSection/>

            {/* CTA section*/}
             <CTASection/>

            {/* Footer Section*/}
            <FooterSection/>

        </div>
     );
}

export default Landing;