import type { SVGProps } from "react";

const Pytest = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      {...props}
      fill="none"
      viewBox="0 0 100 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#00A3E0" d="M8 5h18v5H8zM8 29h18v76H8z" />
      <path fill="#C7D300" d="M30 5h18v5H30zM30 29h18v62H30z" />
      <path fill="#F47C12" d="M52 5h18v5H52zM52 29h18v43H52z" />
      <path fill="#DF251B" d="M74 5h18v5H74zM74 29h18v26H74z" />
      <rect x="3" y="15" width="94" height="9" rx="4.5" fill="#696969" />
    </svg>
  );
};

export { Pytest };
