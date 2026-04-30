import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, ChevronDown } from "lucide-react";

const testimonials = [
  {
    emoji: "🙌",
    label: "Hospital Team",
    service: "Critical Care Transfer",
    name: "Joshua Hans CCEMTP",
    role: "Captain • Unit 59 Hatzoloh of Rockland County",
    quote:
      "Good afternoon Michael, I just wanted to send over this note of appreciation for the help provided yesterday from SeniorCare. As you are aware, we had a critical patient that needed to be transferred from GSH to Mt Sinai. As soon as the bed was secured, SeniorCare provided us with the GS link to allow us to see the responding units. This was a tremendous help as we were able to show the patient’s family where the ambulance was and how soon they would arrive. This truly helped a very stressful situation. When the team arrived, they presented in a very professional manner. There were many people watching the transfer, and your team really shone. Nick and Josh led the entire team and skillfully transferred the patient. The crew was proficient, smooth, and respectful. All involved felt that the patient was remaining under skilled care and would be well taken care of during the transfer. The overall demeanor and approach that the crew took toward this difficult transfer was outstanding and appreciated. Thank you again and go green!",
  },
  {
    emoji: "💚",
    label: "Family Member",
    service: "Hospital-to-Facility Transport",
    name: "Kathy",
    role: "Patient Family",
    quote:
      "My dad, 89 and frail with dementia, was at South Nassau Hospital ER on Friday. Your company was called to transport him back to Meadowbrook Care Center. The first thing I have to comment on is that your drivers and EMTs arrived exactly on time. We had been in the ER since early in the morning and my dad, being out of his routine, was tired, agitated, and very disoriented. Working at a dialysis unit, I have had many bad experiences with ambulance companies picking up my patients late, so my expectations were very low. Your staff will never know how much it meant that they arrived on time to get my dad back to his facility. Your staff were amazing. It was two young women and one was Crystal. Both women were professional, polite, and most important, kind. They treated my dad like he was their own father. They were gentle with him and joked with him and got him to smile and laugh. They took such a weight off my heart and mind. I had a long drive out to eastern Long Island on a Friday night and I knew they would deliver him safely back to Meadowbrook. They are the epitome of who you want representing your company and taking care of your patients.",
  },
  {
    emoji: "🩺",
    label: "Care Facility",
    service: "BLS Transport",
    name: "M. G.",
    role: "Family / Facility Communication",
    quote:
      "I spoke with my father just now and he literally could not stop saying how great your people and your system were. From the moment you arrived at St. Barnabas to pick up my mother until your team took her upstairs at her home hours later, your team embodied professionalism, competence, and compassion. They gave my parents confidence and security in a time when they would otherwise be without it. My father said that he literally does not know how they would have managed without you, and he is looking forward to your team being with them tomorrow as well. Anyway, I and my family would do anything to help you. If you need testimonials, endorsements, or anything else, please let us know.",
  },
  {
    emoji: "🚑",
    label: "Family Member",
    service: "Non-Emergency Medical Transport",
    name: "J.M.",
    role: "Patient Family",
    quote:
      "I wish to inform you of the caring service I received from those above who are employees of yours. They showed reassuring care for me in my illness from Lenox Hill Hospital to Village Rehab and Nursing. From COPD, I caught a serious virus which put me in a very serious health situation. I want to thank your workers not only for their excellence in duty, but for just as important to a patient their willingness to do their assigned job with care. Your employees bring great credit to your services and I would highly recommend your organization for such excellent care I received.",
  },
  {
    emoji: "🛡️",
    label: "Patient Family",
    service: "Home Transport",
    name: "Family Note",
    role: "Patient Family",
    quote:
      "I would like to commend the service of two of your employees who transported my father from Maimonides Medical Center to his home. We had requested that SeniorCare be selected to bring him home, so that my nephew could intervene and be the one to transport him. Although we did not find out that the hospital did arrange as we requested until the team showed up in the hospital corridor, we were pleased with the service provided. The team focused on getting the job done, were smiling, pleasant, and eager to please during the entire transport. My father is not at all a young man and his mobility is limited. They were sensitive to his condition and did not in any way treat him harshly. Not once was there a sharp word uttered. I would like to thank them again for the excellent job that they did.",
  },
];

function ProgressBar({ activeIndex, total }) {
  const width = `${((activeIndex + 1) / total) * 100}%`;

  return (
    <div className="h-px w-full bg-neutral-200">
      <motion.div
        key={activeIndex}
        className="h-px bg-[#174f25]"
        initial={{ width: 0 }}
        animate={{ width }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const active = testimonials[activeIndex];

  const previewText = useMemo(() => {
    if (expanded) return active.quote;
    if (active.quote.length <= 430) return active.quote;
    return `${active.quote.slice(0, 430).trim()}…`;
  }, [active.quote, expanded]);

  const next = () => {
    setExpanded(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setExpanded(false);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-24 text-neutral-950 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(23,79,37,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#174f25]">
              Patient Stories / 04
            </p>

            <h2 className="mt-7 max-w-3xl text-[48px] font-black leading-[0.92] tracking-tight text-neutral-950 md:text-[86px]">
              Trusted by families when care can’t wait.
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
              Long-form notes of appreciation, cleaned into a focused reading
              experience — calm, spacious, and built for trust.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <span className="text-sm font-black text-[#174f25]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <ProgressBar
                activeIndex={activeIndex}
                total={testimonials.length}
              />
              <span className="text-sm font-black text-neutral-400">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="grid min-h-[660px] grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
          {/* TESTIMONIAL INDEX */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-4">
              <p className="px-3 pb-4 pt-2 text-xs font-black uppercase tracking-[0.22em] text-neutral-500">
                Stories
              </p>

              <div className="space-y-2">
                {testimonials.map((item, index) => {
                  const selected = activeIndex === index;

                  return (
                    <button
                      key={`${item.name}-${index}`}
                      type="button"
                      onClick={() => {
                        setExpanded(false);
                        setActiveIndex(index);
                      }}
                      className={[
                        "w-full rounded-2xl p-4 text-left transition",
                        selected
                          ? "bg-[#174f25] text-white shadow-lg shadow-green-950/15"
                          : "bg-white text-neutral-900 hover:bg-neutral-100",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={[
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl",
                            selected ? "bg-white/12" : "bg-[#f7f5ef]",
                          ].join(" ")}
                        >
                          {item.emoji}
                        </div>

                        <div>
                          <p
                            className={[
                              "text-xs font-black uppercase tracking-[0.18em]",
                              selected ? "text-[#f5a11a]" : "text-[#174f25]",
                            ].join(" ")}
                          >
                            {String(index + 1).padStart(2, "0")} / {item.label}
                          </p>

                          <p
                            className={[
                              "mt-1 text-sm font-bold leading-tight",
                              selected ? "text-white" : "text-neutral-950",
                            ].join(" ")}
                          >
                            {item.service}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MAIN READING CARD */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute right-6 top-8 hidden h-full w-[94%] rounded-[2rem] border border-neutral-200 bg-neutral-50 lg:block" />
              <div className="absolute right-12 top-16 hidden h-full w-[88%] rounded-[2rem] border border-neutral-200 bg-white lg:block" />

              <AnimatePresence mode="wait">
                <motion.article
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: 24,
                    scale: 0.985,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    scale: 0.985,
                    filter: "blur(8px)",
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative z-10 min-h-[650px] rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-200/80 md:p-12 lg:p-16"
                >
                  <Quote
                    className="absolute right-8 top-8 text-neutral-100"
                    size={140}
                    strokeWidth={1.2}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-center gap-5">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-neutral-200 bg-[#f7f5ef] text-5xl shadow-inner">
                          {active.emoji}
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5a11a]">
                            {active.label}
                          </p>
                          <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#174f25]">
                            {active.service}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-full border border-neutral-200 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-neutral-500">
                        SeniorCare Testimonial
                      </div>
                    </div>

                    <div className="mt-14 max-w-5xl">
                      <p className="text-[28px] font-black leading-[1.18] tracking-tight text-neutral-950 md:text-[42px] lg:text-[48px]">
                        “{previewText}”
                      </p>

                      {active.quote.length > 430 && (
                        <button
                          type="button"
                          onClick={() => setExpanded((current) => !current)}
                          className="mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-300 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-neutral-950 transition hover:border-[#174f25] hover:bg-[#174f25] hover:text-white"
                        >
                          {expanded ? "Show less" : "Read full note"}
                          <ChevronDown
                            size={18}
                            className={[
                              "transition",
                              expanded ? "rotate-180" : "",
                            ].join(" ")}
                          />
                        </button>
                      )}
                    </div>

                    <div className="mt-14 flex flex-col gap-8 border-t border-neutral-200 pt-8 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="text-2xl font-black text-neutral-950">
                          {active.name}
                        </p>
                        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">
                          {active.role}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={previous}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition hover:border-[#174f25] hover:bg-[#174f25] hover:text-white"
                          aria-label="Previous testimonial"
                        >
                          <ArrowLeft size={20} />
                        </button>

                        <button
                          type="button"
                          onClick={next}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition hover:border-[#174f25] hover:bg-[#174f25] hover:text-white"
                          aria-label="Next testimonial"
                        >
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}