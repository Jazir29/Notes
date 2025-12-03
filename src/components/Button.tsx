import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'icon';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "transition-all duration-200 ease-in-out font-medium focus:outline-none focus:ring-2 focus:ring-offset-1";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-4 py-2 shadow-md hover:shadow-lg focus:ring-slate-900",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 rounded-lg px-4 py-2 focus:ring-slate-300",
    icon: "p-2 rounded-full hover:bg-black/10 text-slate-700 flex items-center justify-center",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;