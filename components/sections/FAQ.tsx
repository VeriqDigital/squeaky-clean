"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-18">
      <div>
        <h2 className="font-heading text-[clamp(3rem,4.8vw,4.75rem)] font-extrabold leading-[0.9] text-(--navy)">
          Exterior Cleaning Questions.
        </h2>
        <p className="mt-6 max-w-md text-lg leading-8 text-(--muted)">
          Every property and surface is different. We’ll confirm the specifics when reviewing your estimate.
        </p>
      </div>

      <div className="border-t-2 border-(--navy)">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;

          return (
            <div key={item.question} className="border-b border-(--border)">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-18 w-full cursor-pointer items-center justify-between gap-5 py-5 text-left font-heading text-xl font-bold leading-tight text-(--navy) transition-colors hover:text-(--blue-hover) sm:text-2xl"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-3xl font-normal leading-none text-(--blue-hover) transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div id={answerId} hidden={!isOpen}>
                <p className="max-w-2xl pb-6 pr-10 leading-7 text-(--muted)">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
