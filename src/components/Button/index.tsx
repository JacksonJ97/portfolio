const Button = ({ text }: { text: string }) => {
  return (
    <button className="text-lg mx-3 p-3 bg-[#ffd369] text-[#222831] border-none rounded-md cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.2)] hover:bg-[#eeeeee]">
      {text}
    </button>
  );
};

export default Button;
