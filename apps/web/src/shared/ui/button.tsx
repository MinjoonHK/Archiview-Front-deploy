import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'login';
  startIcon?: React.ReactNode;
  children: React.ReactNode;
  fullwidth?: boolean;
  disabled?: boolean;
  className?: string;
}

/**
 * Button Component Props
 * @param variant 버튼의 variant (contained, outlined, login)
 * @param startIcon 버튼의 startIcon
 * @param children 버튼의 children
 * @param fullwidth default false
 * @param disabled default false
 * @param className 외부에서 전달받는 className (오버라이드 용도)
 * @param props 기본 button attribute
 */
export const Button = ({
  variant = 'contained',
  children,
  startIcon,
  fullwidth = false,
  disabled = false,
  className,
  ...props
}: IButtonProps): React.ReactNode => {
  // 버튼 공통 기본 스타일
  const baseStyles = `
    inline-flex
    py-[12px]
    px-[28px]
    text-[16px]
    cursor-pointer
    items-center
    justify-center
    font-semibold
    rounded-[12px]
    focus:outline-none
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  // variant별 스타일 정의
  const variantStyles = {
    contained: 'bg-primary-40 text-neutral-10 hover:bg-primary-40',
    outlined: 'border border-primary-40 text-primary-40 hover:bg-primary-40 hover:text-neutral-10',
    login: 'text-neutral-70',
  };

  return (
    <button
      className={twMerge(
        clsx(baseStyles, variantStyles[variant], fullwidth && 'w-full', className),
      )}
      disabled={disabled}
      {...props}
    >
      {/* startIcon이 있을 때만 렌더링 */}
      {startIcon && <span className="mr-[12px] inline-flex items-center">{startIcon}</span>}
      {children}
    </button>
  );
};
