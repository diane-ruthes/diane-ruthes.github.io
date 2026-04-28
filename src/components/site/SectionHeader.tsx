interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeader = ({ eyebrow, title, subtitle, align = "left", light = false }: Props) => {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`text-eyebrow mb-3 inline-flex items-center ${
            light ? "text-green-pale" : "text-green-mid"
          }`}
        >
          <span
            className={`inline-block w-7 h-px mr-3 ${
              light ? "bg-green-pale" : "bg-green-mid"
            }`}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] ${
          light ? "text-cream" : "text-green-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base font-light leading-relaxed ${
            light ? "text-green-pale/70" : "text-text-mid"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
