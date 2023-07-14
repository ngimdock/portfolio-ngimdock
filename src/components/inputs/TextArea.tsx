type TextAreaProps = {
  value: string;
  name: string;
  onChange: (e: any) => void;
};

export const TextArea = ({ value, name, onChange }: TextAreaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Votre message"
      name={name}
      className="w-full p-5 overflow-y-hidden text-xs rounded-none h-44 sm:h-full bg-dark-3 text-light focus:bg-dark font-Inter animate focus:outline-none focus:border-spacing-0"
    ></textarea>
  );
};
