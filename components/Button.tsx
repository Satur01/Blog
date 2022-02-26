interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="shadow-sm outline-none focus:bg-slate-900 inline-flex cursor-pointer select-none items-center justify-center rounded-lg border border-slate-600 bg-white px-4 py-1 text-slate-600 transition-colors hover:border-slate-100 hover:bg-slate-600 hover:text-slate-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
