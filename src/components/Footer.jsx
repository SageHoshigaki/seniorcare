export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 relative overflow-hidden">
      {/* Top Green Line */}
      <div className="absolute top-0 left-0 w-full h-[8px] bg-[#1d5a27]"></div>

      {/* Top main grid (3 columns) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

        {/* COLUMN 1 — Operating Worldwide Section */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">
            OPERATING IN NEW YORK
          </p>

          <p className="text-[15px] leading-relaxed max-w-sm mb-8">
            We provide professional emergency medical services across New York City,
            Brooklyn, and Long Island. Our teams deliver excellence, reliability,
            and rapid response 24/7.
          </p>

          <a href="mailto:info@scemsny.com" className="underline text-[15px]">
            EMAIL US
          </a>
        </div>

        {/* COLUMN 2 — CONTACT */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">
            CONTACT
          </p>

          <ul className="space-y-3 text-[15px] leading-tight">
            <li>
              24-hour Communications Center: <br />
              <span className="font-medium">718.430.9700</span>
            </li>
            <li>
              Administrative: <br />
              <span className="font-medium">718.430.1525</span>
            </li>
            <li>
              Business: <br />
              <span className="font-medium">718.430.1525</span>
            </li>
            <li>
              Human Resources: <br />
              <span className="font-medium">718.430.1525 ext. 3</span>
            </li>
            <li>
              Email: <span className="underline">info@scemsny.com</span>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 — NAVIGATION + BUTTONS */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-4">
            NAVIGATION
          </p>

          <ul className="space-y-3 text-[15px]">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Cases</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>

          {/* STACKED CTA BUTTONS */}
          <div className="mt-8 flex w-full max-w-sm flex-col gap-4">
            <a
              href="tel:7184309700"
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#c80000] px-6 py-5 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-red-950/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_42%)]" />

              <div className="relative flex items-center justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
                    24-Hour Communications
                  </p>
                  <p className="mt-1 text-lg font-black uppercase tracking-tight">
                    Dispatch 718-430-9700
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">
                  ☎
                </span>
              </div>
            </a>

            <a
              href="#careers"
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1d5a27] px-6 py-5 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-green-950/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%)]" />

              <div className="relative flex items-center justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
                    Careers
                  </p>
                  <p className="mt-1 text-lg font-black uppercase tracking-tight">
                    Join Our Team
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl">
                  ✓
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* CENTER ICON BUTTON */}
      <div className="w-fit mx-auto mt-20 mb-12 relative z-10">
        <div className="w-6 h-6 border border-white flex items-center justify-center text-sm">
          +
        </div>
      </div>

      {/* HUGE WORDMARK */}
      <div className="w-full text-white opacity-[0.06] font-bold text-[20vw] leading-none tracking-tight absolute bottom-0 left-0 pointer-events-none select-none">
        SENIORCARE
      </div>

      {/* Bottom right area */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-[13px]">
          © ALL RIGHTS RESERVED 2026
        </p>

        <div className="flex space-x-6 text-[13px]">
          <a href="#" className="hover:underline">BACK ON TOP</a>
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <a href="#" className="hover:underline">MADE BY INNA</a>
        </div>
      </div>
    </footer>
  );
}