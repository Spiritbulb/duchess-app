import ImageBanner from "../components/abouthero";
import BusinessCard from "../components/businesscard";
import About from "../components/aboutt";
import AboutUs from "../components/aboutus";
import OurWork from "../components/ourwork";
import Team from "../components/team";
import Mission from "../components/mission";
import CTA from "../components/CallToAction";

export default function AboutPage() {
    return (
        <div className="relative">
            {/* Hero Section with overlapping elements */}
            <div className="relative">
                <ImageBanner />
            </div>
           
            {/* Navigation Buttons - Centered above content */}
                <div className="absolute mt-72 left-0 right-0 z-10 px-6">
                    <div className="max-w-7xl mx-auto">
                        <About />
                    </div>
                </div>

            {/* Content Sections with proper spacing */}
            <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto space-y-2">
                <section id="about" className="scroll-mt-24">
                    <AboutUs />
                </section>
                
                <section id="work" className="scroll-mt-24">
                    <OurWork />
                </section>
                
                <section id="mission" className="scroll-mt-24">
                    <Mission />
                </section>
                
                <section id="team" className="scroll-mt-24">
                    <Team />
                </section>
            </div>

            <CTA/>
        </div>
    );
}