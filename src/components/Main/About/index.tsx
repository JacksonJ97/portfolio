import SectionHeader from "../../SectionHeader";

const About = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex flex-col items-center">
      <SectionHeader text="About Me" />
      <div className="bg-[#393e46] rounded-md p-12 w-4/5 max-w-[1200px] shadow-[0_0_16px_rgba(0,0,0,0.15)] max-[635px]:p-6 max-[635px]:w-[90%]">
        <p className="text-xl leading-relaxed max-[635px]:text-base">
          I'm an Electrical Engineering graduate making a career switch into
          software development. With a focus in frontend development, I'm
          passionate about producing elegant and polished user interfaces
          efficiently and effectively. When I'm not working on web applications,
          I can be found playing competitive games or engaging in new hobbies
          with friends. I enjoy solving problems through code, and I'm looking
          forward to work alongside amazing programmers!
        </p>
      </div>
    </div>
  );
};

export default About;
