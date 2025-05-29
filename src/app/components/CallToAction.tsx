export default function CTA() {
  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-[#d1c578]/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5"></div>
      <div className="absolute -top-32 left-1/2 w-64 h-64 rounded-full bg-[#d1c578]/10 blur-3xl transform -translate-x-1/2"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#d1c578]" />
          <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
            Limited Availability
          </span>
          <div className="w-12 h-px bg-[#d1c578]" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-black-mango text-white mb-6">
          <span className="text-[#d1c578]">Secure Your Seat</span> at <br className="hidden sm:block" />The Investors' Table
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Applications for our Q1 cohort close soon. Join 327 elite women investors building 
          generational wealth through our proven framework.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="
            bg-[#d1c578] hover:bg-[#c2b46a] 
            text-black 
            font-bold 
            py-4 px-12 
            rounded-none 
            transition-all duration-300 
            transform hover:scale-105 
            border-2 border-[#d1c578]
            shadow-lg hover:shadow-[#d1c578]/40
            text-lg
            relative
            overflow-hidden
            group
          ">
            <span className="relative z-10">Apply Now</span>
            <span className="
              absolute inset-0 
              bg-[#d1c578]/80 
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "></span>
          </button>
          
          <button className="
            bg-transparent hover:bg-white/5 
            text-white 
            font-bold 
            py-4 px-12 
            rounded-none 
            transition-all duration-300 
            border-2 border-white/30 hover:border-[#d1c578]
            text-lg
            group
          ">
            <span className="
              text-white group-hover:text-[#d1c578]
              transition-colors duration-300
            ">
              Book Discovery Call
            </span>
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[#d1c578]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Exclusive Member Network</span>
          </div>
          
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-[#d1c578]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>30-Day Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
      
    
    </section>
  );
}