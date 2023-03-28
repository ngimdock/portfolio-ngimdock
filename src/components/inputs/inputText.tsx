type InputTextProps = {
  placeholder: string;
};

export const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-5 text-xs text-light bg-dark-3 focus:bg-dark animate focus:outline-none focus:border-spacing-0"
    />
  );
};
