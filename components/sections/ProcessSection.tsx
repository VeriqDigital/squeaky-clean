import { CalendarIcon, MessageIcon, SparkleIcon } from "@/components/ui/Icons";

const steps = [
  { title: "Request an Estimate", description: "Tell us what you need cleaned and provide the basic details about your property or vehicle.", Icon: MessageIcon },
  { title: "We Review the Job", description: "We’ll confirm the scope, answer any questions, and provide clear next steps.", Icon: CalendarIcon },
  { title: "We Bring It Back to Life", description: "Our team completes the cleaning with attention to detail and respect for your property.", Icon: SparkleIcon },
] as const;

const ProcessSection = () => (
  <div>
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">How it works</p>
      <h2 className="mt-4 font-heading text-[clamp(2.15rem,10vw,4.35rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-(--navy)">Simple From Start to Finish</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-(--muted)">A straightforward process, clear communication, and professional care for your property.</p>
    </div>
    <ol className="relative mt-9 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3">
      {steps.map(({ title, description, Icon }, index) => (
        <li key={title} className="relative rounded-[1.25rem] border border-(--border) bg-white p-5 shadow-(--shadow-sm) sm:rounded-[1.5rem] sm:p-7">
          <div className="flex items-center justify-between"><span className="flex size-12 items-center justify-center rounded-full bg-(--surface-blue) text-(--blue-hover)"><Icon className="size-6" /></span><span className="font-heading text-sm font-extrabold tracking-[0.16em] text-(--blue-hover)">0{index + 1}</span></div>
          <h3 className="mt-6 font-heading text-xl font-bold leading-tight text-(--navy) sm:mt-7 sm:text-2xl">{title}</h3>
          <p className="mt-4 leading-7 text-(--muted)">{description}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default ProcessSection;
