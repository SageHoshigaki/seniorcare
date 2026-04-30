export default function HeroIntro() {
  return (
    <section className="w-full bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl">
        
        {/* HEADLINE */}
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-semibold leading-[1.05] text-black mb-8">
         Professionalism in attitude, tone, and presence is a non-negotiable expectation on every call.
        </h1>

        {/* SUBTEXT */}
        <p className="text-[18px] md:text-[20px] text-black/80 leading-relaxed max-w-3xl mb-10">
         At SeniorCare, customer service is more than a promise—it’s our operating standard.
Every patient, every family member, and every partner receives clear communication, empathy, and rapid, reliable care.
We focus on delivering a calm, professional experience even in high-stress moments.
Our teams are trained to exceed expectations, not just meet them.
        </p>

        {/* LINK */}
        <a 
          href="#" 
          className="text-black text-[16px] underline underline-offset-4 hover:opacity-60 transition"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}