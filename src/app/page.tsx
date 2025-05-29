import Image from "next/image"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Values from "./components/Values"
import Head from "next/head"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CallToAction"


export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <meta rel="icon" property="/favicon.ico"/>
      </Head>
      
      <Navbar />
      
      <HeroSection/>
      <Values/>

      <Testimonials/>
      <CTA/>

<Footer/>
    </div>
  )
}