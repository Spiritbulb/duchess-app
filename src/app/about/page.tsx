// app/about/page.tsx or pages/about.tsx (depending on your Next.js setup)
import ImageBanner from "../components/abouthero";
import BusinessCard from "../components/businesscard";
import Navbar from "../components/Navbar";
import About from "../components/aboutt";
import AboutUs from "../components/aboutus";
import OurWork from "../components/ourwork";
import Team from "../components/team";
import Footer from "../components/Footer";
import Mission from "../components/mission";
export default function AboutPage() {
    return (
        <div>
            <Navbar />

            {/* Banner section with overlayed business card */}
            <div className="relative">
                <ImageBanner />
                <div className="absolute inset-32 items-left justify-left">
                    <BusinessCard />
                </div>
            </div>
            <div className="absolute right-9 py-10 px-10 space-y-10">

                <h1 className="text-4xl font-bold mb-6 text-white">
                    About Us</h1>
                <About />
            </div>

            <AboutUs />

            <OurWork />
            <Mission />

            <Team />
            <Footer />

        </div>
    );
}
