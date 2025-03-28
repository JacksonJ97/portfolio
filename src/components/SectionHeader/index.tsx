const SectionHeader = ({ text }: { text: string }) => {
  return (
    <h2 className="text-2xl mt-[calc(55px+1.5em)] mb-6 border-b border-[#ffd369] pb-[0.15em]">
      {text}
    </h2>
  );
};

export default SectionHeader;
