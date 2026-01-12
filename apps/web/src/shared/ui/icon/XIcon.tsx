import * as React from 'react';

type XIconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * X 모양 버튼
 * 피그마 Input 컴포넌트에 있는 그 X 버튼
 */
export const XIcon = ({ title, ...props }: XIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M10.75 0.75L0.750675 10.7493M10.7493 10.75L0.75 0.750707"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
