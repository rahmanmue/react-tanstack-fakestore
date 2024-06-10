import { InputText} from 'primereact/inputtext';
import { Password as PrimePassword } from 'primereact/password';
        

export interface InputTextProps {
    label: string;
    invalid?: boolean | undefined;

}

export interface PasswordProps{
    label: string;
    invalid?: boolean | undefined;
}

const Text: React.FC<InputTextProps> = (props) => {
  const {label, invalid} = props;
  return (
    <div className="flex flex-column gap-2">
        <label htmlFor={label}>{label}</label>
        <InputText id={label} invalid={invalid} aria-describedby={`${label}-help`} />
        <small id={`${label}-help`}>
            Enter your username.
        </small>
    </div>
  )
}

const Password: React.FC<PasswordProps> = (props) => {
  const {label, invalid} = props;
  return (
    <div className="flex flex-column gap-2">
      <label htmlFor={label}>{label}</label>
      <PrimePassword feedback={false} invalid={invalid} id={label} toggleMask />
    </div>
  )
}



const Input = {
  Text,
  Password
};



export default Input;