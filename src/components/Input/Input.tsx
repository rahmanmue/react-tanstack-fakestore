import { InputText } from "primereact/inputtext";
import { Password as PrimePassword } from "primereact/password";
import React from "react";
import "./input.scss";

export interface InputTextProps {
  id: string;
  type: string;
  placeholder?: string;
  invalid?: boolean;
  value?: string;
  className?: string;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface PasswordProps {
  id: string;
  placeholder?: string;
  invalid?: boolean;
  value?: string;
  className?: string;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface InputProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

const Input: React.FC<InputProps> & {
  Text: React.FC<InputTextProps>;
  Password: React.FC<PasswordProps>;
} = (props) => {
  const { label, className, children } = props;
  return (
    <div
      className={`flex flex-column  ${className} field w-full`}
      style={{ width: "100%" }}
    >
      <label htmlFor={label} className="text-color-secondary">
        {label}
      </label>
      {children}
    </div>
  );
};

const Text: React.FC<InputTextProps> = (props) => {
  return <InputText {...props} />;
};

const Password: React.FC<PasswordProps> = (props) => {
  return <PrimePassword {...props} toggleMask />;
};

Input.Text = Text;
Input.Password = Password;

export default Input;
