export default function Work() {
  return (
    <section id="work" className="scroll-mt-20">
      <h2 className="font-fira-code mb-4 text-2xl font-medium text-(--text-color) uppercase">
        Work
      </h2>

      <div className="min-xs:flex-row min-xs:items-center mb-1 flex flex-col justify-between gap-1">
        <h3 className="text-base font-medium text-(--text-color)">PheedLoop</h3>
        <p className="text-sm text-(--text-muted-color)">Feb 2022 - Mar 2025</p>
      </div>

      <div className="min-xs:flex-row min-xs:items-center flex flex-col justify-between gap-1">
        <p className="text-sm text-(--text-muted-color)">
          Full Stack Software Engineer
        </p>
        <p className="text-sm text-(--text-muted-color)">Toronto, ON</p>
      </div>
    </section>
  );
}
