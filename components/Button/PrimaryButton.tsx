interface PrimaryProps {
  children: React.ReactNode;
  className: string;
}

export const Primary = (Props: PrimaryProps) => {
  const { children, className } = Props;
  return (
    <div
      className={`w-fit rounded-md bg-primary-darkblue px-4 py-2 text-text-s text-white ${className}`}
    >
      {children}
    </div>
  );
};
