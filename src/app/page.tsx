"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F6F4EF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6F4EF] border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 items-center h-16 md:h-20">
            {/* Left nav items */}
            <div className="hidden md:flex items-center gap-6 justify-start">
              <a
                href="#mission"
                className="text-sm text-[#525252] hover:text-[#0A163C] transition-colors"
              >
                Mission
              </a>
              <a
                href="#founder"
                className="text-sm text-[#525252] hover:text-[#0A163C] transition-colors"
              >
                The Club
              </a>
            </div>

            {/* Mobile: empty left space */}
            <div className="md:hidden" />

            {/* Center logo */}
            <div className="flex justify-center">
              <a href="#">
                <Image
                  src="/besc.png"
                  alt="Bishop England Spanish Club"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                  fetchPriority="high"
                />
              </a>
            </div>

            {/* Right: CTA */}
            <div className="flex items-center justify-end">
              <a
                href="https://www.behs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-[#00874F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#007043] transition-colors"
              >
                Join the Club
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #F6F4EF 0%, #F6F4EF 60%, #FFFFFF 100%)"
        }}
      >

        {/* Background image - blurred, organic blob shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-4 md:mt-8">
          <div
            className="relative w-[65%] sm:w-[55%] md:w-[50%] lg:w-[42%] max-w-2xl aspect-[16/10] blur-xl opacity-30 md:opacity-35 overflow-hidden"
            style={{
              borderRadius: "70% 30% 60% 40% / 40% 70% 30% 60%",
            }}
          >
            <Image
              src="/hispanic.jpg"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 65vw, (max-width: 1024px) 55vw, 42vw"
              className="object-cover"
              quality={60}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0A163C] leading-[1.15] tracking-tight">
            Habla. Conecta.
            <br />
            <span className="italic">Descubre.</span>
            <sup className="text-base md:text-lg align-super ml-1 text-[#999]">[1]</sup>
          </h1>

          {/* Tagline */}
          <p className="mt-10 font-serif text-xl md:text-2xl text-[#525252] italic">
            Spanish is more than a&nbsp;class.
          </p>

          {/* Footnote */}
          <div className="mt-16 max-w-md mx-auto text-left">
            <p className="text-sm text-[#525252] leading-relaxed font-serif italic">
              [1] Speak. Connect. Discover. Culture is how we understand each
              other — language opens the door, but culture is what makes the
              room feel like&nbsp;home.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500 z-10"
          style={{ opacity: scrollY > 100 ? 0 : 1 }}
        >
          <svg
            className="w-6 h-6 text-[#999] animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* Mission Section */}
      <section 
        id="mission" 
        className="py-24 md:py-32 px-6 relative"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #F6F4EF 100%)"
        }}
      >
        
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#999] mb-8 font-sans">
            The Mission
          </p>

          <p className="font-serif text-2xl md:text-3xl text-[#0A163C] leading-relaxed">
            Bishop England Spanish Club is the most welcoming doorway into
            Spanish on campus — a student-led hub for language, culture, and&nbsp;connection.
          </p>

          <p className="font-serif text-xl md:text-2xl text-[#525252] leading-relaxed mt-8">
            You do not need to be fluent. You only need to be curious. Come as
            you are. Leave more connected to the Spanish-speaking&nbsp;world.
          </p>

          <blockquote className="mt-12 pl-6 border-l-2 border-[#00874F]">
            <p className="font-serif text-lg md:text-xl text-[#525252] italic leading-relaxed">
              &quot;Tu lugar está&nbsp;aquí. Your place is&nbsp;here.&quot;
            </p>
            <cite className="block mt-4 text-sm text-[#999] not-italic">
              — Bishop England Spanish Club
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Founder Section */}
      <section 
        id="founder" 
        className="py-24 md:py-32 px-6 relative"
        style={{
          background: "linear-gradient(to bottom, #F6F4EF 0%, #F6F4EF 50%, #FFFFFF 100%)"
        }}
      >
        
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#999] mb-8 font-sans">
            The Club
          </p>

          <h2 className="font-serif text-3xl md:text-4xl text-[#0A163C] mb-6">
            Student-led. Always&nbsp;welcoming.
          </h2>

          <p className="font-serif text-lg md:text-xl text-[#525252] leading-relaxed">
            Spanish Club is run by students, for students — meetings,
            celebrations, service, and projects that bring language and culture
            to life beyond the&nbsp;classroom.
          </p>

          <p className="font-serif text-lg md:text-xl text-[#525252] leading-relaxed mt-4">
            Whether you&apos;re brand new to Spanish or already speaking, there&apos;s a
            place for you here. Come curious. Leave more&nbsp;connected.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section 
        id="connect" 
        className="py-24 md:py-32 px-6 relative"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #F6F4EF 100%)"
        }}
      >
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="font-serif italic text-3xl md:text-4xl text-[#0A163C] mb-4">
            Tu lugar está&nbsp;aquí.
          </p>

          <p className="font-serif text-lg md:text-xl text-[#525252] mb-12 max-w-md mx-auto">
            You don&apos;t need to be fluent. You only need to be&nbsp;curious.
          </p>

          <a
            href="https://www.behs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00874F] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#007043] transition-colors"
          >
            Join the Club
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 relative border-t border-[#e5e0d8]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <Image
            src="/besc.png"
            alt="Bishop England Spanish Club"
            width={80}
            height={30}
            className="h-6 w-auto"
          />
          <p className="text-sm text-[#999]">Bishop England Spanish Club</p>
          <p className="text-sm text-[#999]">
            © {new Date().getFullYear()} BESC
          </p>
        </div>
      </footer>
    </div>
  )
}
