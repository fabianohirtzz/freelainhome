import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Rocket() {
  const rocketRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rocketRef.current) return;

    // Simple floating animation
    gsap.to(rocketRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Scroll-based animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    tl.to(rocketRef.current, {
      y: -1000,
      x: 200,
      rotate: 15,
      scale: 0.8,
      opacity: 0,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
      <svg
        ref={rocketRef}
        viewBox="0 0 240 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[300px] drop-shadow-[0_0_50px_rgba(0,191,255,0.3)]"
      >
        {/* Flame/Exhaust */}
        <path
          d="M120 340C120 340 100 380 120 400C140 380 120 340 120 340Z"
          fill="#00BFFF"
          className="animate-pulse"
        />
        <path
          d="M120 340C120 340 110 360 120 370C130 360 120 340 120 340Z"
          fill="white"
          className="animate-pulse"
        />
        
        {/* Bottom Boosters */}
        <path d="M90 280 L70 320 H100 L110 280 Z" fill="#111111" stroke="#1f1f1f" />
        <path d="M150 280 L170 320 H140 L130 280 Z" fill="#111111" stroke="#1f1f1f" />

        {/* Main Body */}
        <path
          d="M120 40 C60 140 60 280 60 280 H180 C180 280 180 140 120 40Z"
          fill="white"
          stroke="#00BFFF"
          strokeWidth="2"
        />
        
        {/* Nose Cone */}
        <path
          d="M120 40 C90 90 150 90 120 40Z"
          fill="#00BFFF"
        />

        {/* Window */}
        <circle cx="120" cy="140" r="25" fill="#0a0a0a" stroke="#00BFFF" strokeWidth="3" />
        <circle cx="110" cy="130" r="8" fill="white" fillOpacity="0.2" />

        {/* Fins */}
        <path d="M60 220 L20 280 H60 V220Z" fill="#00BFFF" />
        <path d="M180 220 L220 280 H180 V220Z" fill="#00BFFF" />
        
        {/* Body Lines */}
        <path d="M80 240 H160" stroke="#f0f0f0" strokeWidth="1" />
        <path d="M80 260 H160" stroke="#f0f0f0" strokeWidth="1" />
      </svg>
      
      {/* Sparkles/Particles background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-brand-cyan rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
