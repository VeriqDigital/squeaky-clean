const steps = [
  {
    title: "Request an Estimate",
    description: "Tell us what you need cleaned and share the basic job details.",
  },
  {
    title: "We Review the Job",
    description: "We’ll confirm the scope, answer questions, and explain the next step.",
  },
  {
    title: "We Get to Work",
    description: "Our team completes the cleaning with care and respect for your property.",
  },
] as const;

const ProcessSection = () => (
  <div className="grid gap-10 lg:grid-cols-[0.48fr_1.52fr] lg:gap-16">
    <div>
      <h2 className="font-heading text-[clamp(2.9rem,4vw,4.25rem)] font-extrabold leading-[0.92] text-(--navy)">
        Simple From Start to Finish.
      </h2>
      <p className="mt-5 max-w-sm leading-7 text-(--muted)">
        Clear communication and a straightforward process for every property or vehicle.
      </p>
    </div>

    <ol className="grid border-y-2 border-(--navy) lg:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={`py-7 lg:px-7 lg:py-8 ${index > 0 ? "border-t border-(--border) lg:border-l lg:border-t-0" : ""}`}
        >
          <span className="font-heading text-5xl font-extrabold leading-none text-(--blue-hover)">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-heading text-2xl font-bold leading-none text-(--navy)">
            {step.title}
          </h3>
          <p className="mt-4 leading-7 text-(--muted)">{step.description}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default ProcessSection;
