import Image from "next/image";

const projects = [
  {
    image: "/NEW_HOUSE_CLEAN.jpg",
    alt: "Worker cleaning the exterior windows of a large home",
    className:
      "col-span-2 aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto",
    sizes:
      "(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 58vw, 700px",
    objectPosition: "center 50%",
  },
  {
    image: "/NEW_COMMERCIAL.jpg",
    alt: "Large commercial exterior cleaning project",
    className: "aspect-[4/5] md:col-span-5 md:aspect-auto",
    sizes:
      "(max-width: 767px) calc(50vw - 1.4rem), (max-width: 1279px) 42vw, 500px",
    objectPosition: "center 12%",
  },
  {
    image: "/NEW_COMMERCIAL_CLEANING.jpg",
    alt: "Worker cleaning a large commercial exterior from a lift",
    className: "aspect-[4/5] md:col-span-3 md:aspect-auto",
    sizes:
      "(max-width: 767px) calc(50vw - 1.4rem), (max-width: 1279px) 25vw, 300px",
    objectPosition: "center 46%",
  },
  {
    image: "/NEW_HOUSE_EXTERIOR.jpg",
    alt: "Large residential exterior cleaning project",
    className: "col-span-2 aspect-[16/9] md:col-span-2 md:aspect-auto",
    sizes:
      "(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 17vw, 200px",
    objectPosition: "center 66%",
  },
] as const;

const ProjectShowcase = () => {
  return (
    <div>
      <div className="grid gap-5 border-b-2 border-(--navy) pb-7 md:grid-cols-[0.85fr_1fr] md:items-end">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-(--blue-hover)">
            Recent Work
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-[clamp(2.9rem,5vw,4.75rem)] font-extrabold leading-[0.93] text-(--navy)">
            Work We&apos;re Proud Of.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-(--muted) md:justify-self-end">
          Residential, commercial, and specialty exterior cleaning projects
          completed throughout Southeast Iowa.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-12 md:auto-rows-[13rem] lg:auto-rows-[15rem]">
        {projects.map((project) => (
          <figure
            key={project.image}
            className={`group relative overflow-hidden rounded-[10px] bg-(--navy-deep) ${project.className}`}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes={project.sizes}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ objectPosition: project.objectPosition }}
            />
            {"label" in project && (
              <>
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
              </>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
