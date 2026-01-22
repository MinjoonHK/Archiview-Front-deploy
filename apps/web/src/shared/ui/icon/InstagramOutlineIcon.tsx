import type { SVGProps } from 'react';

export const InstagramOutlineIcon = (props: SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M1.66699 7.99996C1.66699 5.0144 1.66699 3.52162 2.59449 2.59412C3.52198 1.66663 5.01476 1.66663 8.00033 1.66663C10.9859 1.66663 12.4787 1.66663 13.4062 2.59412C14.3337 3.52162 14.3337 5.0144 14.3337 7.99996C14.3337 10.9855 14.3337 12.4783 13.4062 13.4058C12.4787 14.3333 10.9859 14.3333 8.00033 14.3333C5.01476 14.3333 3.52198 14.3333 2.59449 13.4058C1.66699 12.4783 1.66699 10.9855 1.66699 7.99996Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
        stroke="currentColor"
      />
      <path
        d="M11.6719 4.33331L11.6659 4.33331"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
