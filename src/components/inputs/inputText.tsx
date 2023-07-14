import clsx from "clsx";
import { useForm } from "react-hook-form";

type InputTextProps = {
  placeholder: string;
  registerName: string;
  name: string;
  isRequired?: boolean;
  value: string;
  disabled: boolean;
  onChange: (e: any) => void;
  type?: "email" | "text";
};

export const InputText = ({
  type,
  placeholder,
  isRequired,
  disabled,
  value,
  name,
  onChange,
}: InputTextProps) => {
  const { register, watch } = useForm();

  return (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      required={!!isRequired}
      disabled={disabled}
      value={value}
      name={name}
      onChange={onChange}
      className={clsx(
        disabled && " cursor-not-allowed",
        "w-full px-4 py-5 text-xs text-light bg-dark-3 focus:bg-dark animate focus:outline-none focus:border-spacing-0"
      )}
    />
  );
};
