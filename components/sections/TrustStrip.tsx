import Container from "@/components/ui/Container";

const trustItems = [
  "Locally Owned",
  "Residential & Commercial",
  "Free Estimates",
  "Serving Southeast Iowa",
] as const;

const TrustStrip = () => (
  <section
    aria-label="Why choose Squeaky Clean Services"
    className="bg-(--navy-deep) text-(--text-on-dark)"
  >
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {trustItems.map((label, index) => (
          <p
            key={label}
            className={`flex min-h-20 items-center py-5 font-heading text-lg font-bold leading-tight sm:min-h-22 sm:text-xl lg:px-7 ${
              index % 2 === 1 ? "border-l border-white/20 pl-5" : "pr-5"
            } ${index > 1 ? "border-t border-white/20 lg:border-t-0" : ""} ${
              index > 0 ? "lg:border-l lg:border-white/20" : ""
            }`}
          >
            <span className="mr-3 size-1.5 shrink-0 bg-(--blue)" aria-hidden="true" />
            {label}
          </p>
        ))}
      </div>
    </Container>
  </section>
);

export default TrustStrip;
