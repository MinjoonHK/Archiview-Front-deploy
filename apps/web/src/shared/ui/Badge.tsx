interface IBadgeProps {
  variant: 'contained' | 'outlined';
  label: string;
  color: string;
}

export const Badge = ({ variant, label, color }: IBadgeProps): React.ReactElement => {
  const isOutlined = variant === 'outlined';
  const themeColor = `var(--color-${color})`;

  return (
    <div
      style={{
        color: isOutlined ? themeColor : 'var(--color-neutral-10)',
        backgroundColor: isOutlined ? 'transparent' : themeColor,
        borderColor: isOutlined ? themeColor : 'transparent',
      }}
      className={`
        inline-flex
        items-center
        px-[12px]
        py-[4px]
        h-[26px]
        rounded-[12px]
        text-[12px]
        ${isOutlined ? 'border' : ''}
      `}
    >
      {label}
    </div>
  );
};
