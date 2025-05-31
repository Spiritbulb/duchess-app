import { blackMango } from "@/lib/fonts";

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-b border-[#d1c578]/20">
      {/* Decorative Gold Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#d1c578]/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#d1c578]/10 blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#d1c578]" />
            <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
              Verified Experiences
            </span>
            <div className="w-12 h-px bg-[#d1c578]" />
          </div>
          <div className={blackMango.className}>
          <h2 className="text-4xl sm:text-5xl font-black-mango text-white mb-4">
            In Their <span className="text-[#d1c578]">Own Words</span>
          </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our members about their transformative journeys with Duchess
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gradient-to-br from-black to-gray-900 p-0.5 rounded-xl shadow-2xl group">
          <div className="bg-black rounded-xl p-10 lg:p-12 relative overflow-hidden">
            {/* Gold accent */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#d1c578]/10 blur-xl"></div>
            
            <div className="relative z-10">
              <svg 
                className="h-12 w-12 text-[#d1c578] mb-8 opacity-60"
                fill="currentColor" 
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm14.496 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L23.848 4z" />
              </svg>
              
              <blockquote className="text-2xl leading-relaxed text-white mb-10 font-light italic">
                "Duchess transformed my relationship with wealth. Within 18 months, I went from nervous beginner to confidently managing a six-figure portfolio. The education and community gave me tools most women never access."
              </blockquote>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-[#d1c578] flex items-center justify-center text-black font-bold text-lg">
                    EK
                  </div>
                  <div>
                    <p className="font-bold text-white">Edna Kanji</p>
                    <p className="text-[#d1c578] text-sm">Private Equity Associate | Member since 2021</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-[#d1c578]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              className={`h-3 w-3 rounded-full ${i === 0 ? 'bg-[#d1c578]' : 'bg-gray-600'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}