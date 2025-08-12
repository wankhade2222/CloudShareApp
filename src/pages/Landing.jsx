import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import PricingSection from "../components/landing/PricingSection";
import TestmonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import FooterSection from "../components/landing/FooterSection"
const Landing = () =>{
    return ( 
        
        <div className="landing-page">
            {/* HeroSection*/}
            <HeroSection/>

            {/* Features Section*/}
            <FeaturesSection/> 

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