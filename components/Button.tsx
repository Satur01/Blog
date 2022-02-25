interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="inline-flex items-center justify-center rounded-lg border border-slate-900 bg-white px-4 py-1">
      {children}
    </div>
  );
};

export default Button;
