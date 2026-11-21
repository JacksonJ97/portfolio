import type { SVGProps } from "react";

const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" {...props} viewBox="0 0 180 180">
    <defs>
      <clipPath id="nextjs-logo-clip">
        <circle cx="90" cy="90" r="90" />
      </clipPath>
      <linearGradient
        id="nextjs-logo-diagonal"
        gradientUnits="userSpaceOnUse"
        x1="109"
        x2="144.5"
        y1="116.5"
        y2="160.5"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="nextjs-logo-stem"
        gradientUnits="userSpaceOnUse"
        x1="121"
        x2="120.799"
        y1="54"
        y2="106.875"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <circle cx="90" cy="90" r="90" fill="#000" />
    <path
      fill="url(#nextjs-logo-diagonal)"
      clipPath="url(#nextjs-logo-clip)"
      d="M149.508 157.52 69.142 54H54v71.97h12.1136V69.3836L139.999 164.845c3.334-2.231 6.51-4.68 9.509-7.325Z"
    />
    <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-logo-stem)" />
  </svg>
);

export { Nextjs };
