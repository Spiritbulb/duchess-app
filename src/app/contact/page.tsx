import { blackMango } from "@/lib/fonts";


export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-black text-white">        
            <section className="relative py-20 lg:py-28 bg-black overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-[#d1c578]" />
                            <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                                Get In Touch
                            </span>
                            <div className="w-12 h-px bg-[#d1c578]" />
                        </div>
                        <div className={blackMango.className}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black-mango text-white mb-6 leading-tight">
                                Contact <span className="text-[#d1c578]">032 Duchess</span>
                            </h1>
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We'd love to hear from you! Reach out for membership inquiries, partnerships, or just to say hello.
                        </p>
                    </div>

                    {/* Contact Content */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Contact Form */}
                        <div className="flex-1 bg-black/50 p-8 rounded-xl border border-[#d1c578]/20">
                            <h2 className="text-2xl font-black-mango text-white mb-8">
                                Send Us a Message
                            </h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-black/30 border border-[#d1c578]/30 rounded-md text-white focus:border-[#d1c578] focus:ring-[#d1c578] focus:ring-1 transition-all duration-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-black/30 border border-[#d1c578]/30 rounded-md text-white focus:border-[#d1c578] focus:ring-[#d1c578] focus:ring-1 transition-all duration-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 bg-black/30 border border-[#d1c578]/30 rounded-md text-white focus:border-[#d1c578] focus:ring-[#d1c578] focus:ring-1 transition-all duration-300"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="membership">Membership Inquiry</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="general">General Question</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-black/30 border border-[#d1c578]/30 rounded-md text-white focus:border-[#d1c578] focus:ring-[#d1c578] focus:ring-1 transition-all duration-300"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-4 bg-[#d1c578] text-black font-medium rounded-md hover:bg-[#c0b060] hover:scale-[1.02] transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:w-1/3 space-y-8">
                            <div className="bg-black/50 p-8 rounded-xl border border-[#d1c578]/20">
                                <h3 className="text-xl font-black-mango text-white mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-[#d1c578]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 font-medium">Our Location</h4>
                                            <p className="text-gray-400">Nakuru, Kenya</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-[#d1c578]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 font-medium">Email Us</h4>
                                            <p className="text-gray-400">info@duchessgrp.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-[#d1c578]">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-300 font-medium">Call Us</h4>
                                            <p className="text-gray-400">+254 712 312 312</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/50 p-8 rounded-xl border border-[#d1c578]/20">
                                <h3 className="text-xl font-black-mango text-white mb-6">
                                    Meeting Hours
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Monday - Friday</span>
                                        <span className="text-gray-400">9:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Saturday</span>
                                        <span className="text-gray-400">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Sunday</span>
                                        <span className="text-gray-400">Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#d1c578]/10 p-6 rounded-lg border border-[#d1c578]/20">
                                <p className="text-[#d1c578] font-medium italic text-lg">
                                    💛 "Tuungane, Tusonge Mbele" (Let's unite, let's move forward)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}