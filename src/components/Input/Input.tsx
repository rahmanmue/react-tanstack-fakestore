import { InputText } from 'primereact/inputtext';
import { Password as PrimePassword } from 'primereact/password';
import React from 'react';
import "./input.scss"

export interface InputTextProps {
    id: string;
    type: string;
    placeholder?: string;
    invalid?: boolean;
}

export interface PasswordProps {
    id: string;
    placeholder?: string;
    invalid?: boolean;
}

export interface InputProps {
    label: string;
    className?: string;
    children: React.ReactNode;
}

const Input: React.FC<InputProps> & { Text: React.FC<InputTextProps>, Password: React.FC<PasswordProps> } = (props) => {
    const { label, className, children } = props;
    return (
        <div className={`flex flex-column gap-2 ${className}`}>
            <label htmlFor={label} className="text-color-secondary">{label}</label>
            {children}
        </div>
    );
};

const Text: React.FC<InputTextProps> = (props) => {
    const { id, type, placeholder, invalid } = props;
    return (
        <InputText 
            id={id} 
            type={type}
            invalid={invalid}
            placeholder={placeholder}
            
        />
    );
};

const Password: React.FC<PasswordProps> = (props) => {
    const { id, placeholder, invalid } = props;
    return (
        <PrimePassword 
            inputId={id}
            placeholder={placeholder}
            invalid={invalid}
            feedback={false} 
            toggleMask 
        />
    );
};

Input.Text = Text;
Input.Password = Password;

export default Input;
