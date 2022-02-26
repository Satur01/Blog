interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      className="inline-flex items-center justify-center rounded-lg border border-slate-900 bg-white px-4 py-1"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
