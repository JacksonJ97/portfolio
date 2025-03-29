export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-16 px-4 py-32 min-sm:px-8"
    >
      <h2 className="border-b border-yellow-400 pb-1 text-4xl">About Me</h2>

      <div className="rounded-md bg-slate-600 p-6 min-sm:p-12">
        <p className="max-w-prose leading-relaxed min-sm:text-xl">
          I'm an Electrical Engineering graduate making a career switch into
          software development. With a focus in frontend development, I'm
          passionate about producing elegant and polished user interfaces
          efficiently and effectively. When I'm not working on web applications,
          I can be found playing competitive games or engaging in new hobbies
          with friends. I enjoy solving problems through code, and I'm looking
          forward to work alongside amazing programmers!
        </p>
      </div>
    </section>
  );
}
