import * as React from 'react';

type PinIconProps = React.SVGProps<SVGSVGElement>;

export const PinIcon = ({ ...props }: PinIconProps) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.4829 19.5865C12.0854 19.9588 11.554 20.1668 11.001 20.1668C10.448 20.1668 9.91667 19.9588 9.51911 19.5865C5.8786 16.1573 0.999866 12.3265 3.37908 6.76486C4.6655 3.75772 7.75348 1.8335 11.001 1.8335C14.2486 1.8335 17.3366 3.75772 18.623 6.76486C20.9992 12.3195 16.1324 16.1691 12.4829 19.5865Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M14.2087 10.0833C14.2087 11.8552 12.7722 13.2917 11.0003 13.2917C9.22841 13.2917 7.79199 11.8552 7.79199 10.0833C7.79199 8.31142 9.22841 6.875 11.0003 6.875C12.7722 6.875 14.2087 8.31142 14.2087 10.0833Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  );
};
