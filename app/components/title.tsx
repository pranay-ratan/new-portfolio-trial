import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'time' | 'p';
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const classNames = {
  primary: 'font-bold text-4xl tracking-tight transition-all duration-200',
  secondary: 'font-semibold text-2xl tracking-tight transition-all duration-200',
  tertiary: 'font-medium text-lg tracking-tight transition-all duration-200',
};

export function Title({
  children,
  as = 'span',
  variant = 'primary',
  className,
}: Props) {
  const Component = as;
  return (
    <Component
      className={clsx(
        classNames[variant],
        'hover:scale-105 hover:text-blue-600 hover:opacity-90',
        className
      )}
    >
      {children}
    </Component>
  );
}
