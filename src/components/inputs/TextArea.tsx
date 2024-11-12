type TextAreaProps = {
  value: string;
  name: string;
  isRequired: boolean;
  onChange: (e: any) => void;
};

export const TextArea = ({
  value,
  name,
  isRequired,
  onChange,
}: TextAreaProps) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      required={isRequired}
      placeholder="Your message"
      name={name}
      className="w-full p-5 overflow-y-hidden text-xs rounded-none h-44 sm:h-full bg-dark-3 text-light focus:bg-dark font-Inter animate focus:outline-none focus:border-spacing-0"
    ></textarea>
  );
};
