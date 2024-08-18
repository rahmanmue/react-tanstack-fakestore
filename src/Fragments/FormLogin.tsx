import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

// Schema validation dengan Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username Tidak Boleh Kosong"),
  password: Yup.string()
    .required("Password Tidak Boleh Kosong")
    .min(4, "Password Harus Lebih dari 4 Karakter"),
});
interface PrimeInputTextProps {
  label: string;
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  invalid?: boolean;
  value?: string;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}
// Custom component untuk PrimeReact InputText dengan Formik
const PrimeInputText = ({ label, ...props }: PrimeInputTextProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <label htmlFor={props.id || props.name}>{label}</label>
      <InputText
        {...field}
        {...props}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : ""}`}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

interface PrimePasswordProps {
  label: string;
  name: string;
  id?: string;
  placeholder?: string;
  invalid?: boolean;
  value?: string;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  toggleMask?: boolean;
  feedback?: boolean;
}

// Custom component untuk PrimeReact Password dengan Formik
const PrimePassword = ({ label, ...props }: PrimePasswordProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      <label htmlFor={props.id || props.name}>{label}</label>
      <Password
        {...field}
        {...props}
        className={`w-full ${meta.touched && meta.error ? "p-invalid" : ""}`}
        feedback={false}
      />
      {meta.touched && meta.error ? (
        <small className="p-error">{meta.error}</small>
      ) : null}
    </div>
  );
};

const FormLogin = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form className="p-fluid">
          <PrimeInputText
            label="Username"
            name="username"
            type="text"
            placeholder="Masukan Username"
          />
          <PrimePassword
            label="Password"
            name="password"
            placeholder="Masukan Password"
            feedback={false}
          />
          <Button
            label="Login"
            type="submit"
            disabled={!isValid || isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
