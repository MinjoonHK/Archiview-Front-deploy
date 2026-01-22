import type { SVGProps } from 'react';

export const UpArrowIcon = (props: SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <path
        d="M4.11133 8.88889L7.36133 5.63889L10.6113 8.88889"
        stroke="currentColor"
        strokeWidth={1.08333}
      />
    </svg>
  );
};
