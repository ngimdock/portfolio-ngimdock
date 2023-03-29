import { useForm } from "react-hook-form";

type InputTextProps = {
  placeholder: string;
  registerName: string;
  isRequired?: boolean;
  value: string;
};

export const InputText = ({
  placeholder,
  registerName,
  isRequired,
  value,
}: InputTextProps) => {
  const { register, watch } = useForm();

  return (
    <input
      type="text"
      placeholder={placeholder}
      required={!!isRequired}
      value={value}
      // {...register(registerName, { required: !!isRequired })}
      className="w-full px-4 py-5 text-xs text-light bg-dark-3 focus:bg-dark animate focus:outline-none focus:border-spacing-0"
    />
  );
};
