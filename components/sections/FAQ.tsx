"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
      <div><p className="eyebrow">Questions, answered</p><h2 className="mt-4 font-heading text-[clamp(2.15rem,10vw,4.25rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-(--navy)">Helpful Exterior Cleaning Details</h2><p className="mt-5 max-w-md leading-7 text-(--muted)">Every property and surface is different. We’ll confirm the specifics when reviewing your estimate.</p></div>
      <div className="divide-y divide-(--border) border-y border-(--border)">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          return <div key={item.question}><h3><button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} className="flex min-h-18 w-full cursor-pointer items-center justify-between gap-3 py-5 text-left font-heading text-base font-bold text-(--navy) transition hover:text-(--blue-hover) sm:gap-5 sm:text-lg" aria-expanded={isOpen} aria-controls={answerId}><span>{item.question}</span><span aria-hidden="true" className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-(--border) bg-white text-xl font-normal text-(--blue-hover) transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span></button></h3><div id={answerId} hidden={!isOpen}><p className="max-w-2xl pb-6 pr-4 leading-7 text-(--muted) sm:pr-12">{item.answer}</p></div></div>;
        })}
      </div>
    </div>
  );
};

export default FAQ;
