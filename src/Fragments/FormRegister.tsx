import { Button } from "primereact/button";
import { Input } from "../components";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FieldInputProps } from "formik";
interface FormValues {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  kota: string;
  jalan: string;
  noRumah: string;
  zipcode: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  username: Yup.string().required("Username wajib diisi"),
  password: Yup.string().required("Password wajib diisi"),
  firstName: Yup.string().required("First Name wajib diisi"),
  lastName: Yup.string().required("Last Name wajib diisi"),
  phone: Yup.string().required("Phone wajib diisi"),
  kota: Yup.string().required("Kota wajib diisi"),
  jalan: Yup.string().required("Jalan wajib diisi"),
  noRumah: Yup.number()
    .typeError("No Rumah harus berupa angka")
    .required("No Rumah wajib diisi"),
  zipcode: Yup.string().required("Zipcode wajib diisi"),
});

const initialValues: FormValues = {
  email: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  phone: "",
  kota: "",
  jalan: "",
  noRumah: "",
  zipcode: "",
};

const FormRegister = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("Form submitted successfully!");
      }}
    >
      {({ handleSubmit, touched, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-column justify-content-center"
        >
          <div className="flex flex-column h-max">
            <Input label="Email" className="w-full">
              <Field name="email">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="email"
                    placeholder="Masukan Email"
                    type="email"
                    {...field}
                    className={touched.email && errors.email ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="small"
                className="p-error"
              />
            </Input>

            <Input label="Username" className="w-full">
              <Field name="username">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="username"
                    placeholder="Masukan Username"
                    type="text"
                    {...field}
                    className={
                      touched.username && errors.username ? "p-invalid" : ""
                    }
                  />
                )}
              </Field>
              <ErrorMessage
                name="username"
                component="small"
                className="p-error"
              />
            </Input>

            <Input label="Password" className="w-full">
              <Field name="password">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Password
                    id="password"
                    placeholder="Masukan Password"
                    {...field}
                    className={
                      touched.password && errors.password ? "p-invalid" : ""
                    }
                  />
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="small"
                className="p-error"
              />
            </Input>
          </div>

          <div className="flex flex-column h-max">
            <Input label="First Name" className="w-full">
              <Field name="firstName">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="firstName"
                    placeholder="Masukan First Name"
                    type="text"
                    {...field}
                    className={
                      touched.firstName && errors.firstName ? "p-invalid" : ""
                    }
                  />
                )}
              </Field>
              <ErrorMessage
                name="firstName"
                component="small"
                className="p-error"
              />
            </Input>

            <Input label="Last Name" className="w-full">
              <Field name="lastName">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="lastName"
                    placeholder="Masukan Last Name"
                    type="text"
                    {...field}
                    className={
                      touched.lastName && errors.lastName ? "p-invalid" : ""
                    }
                  />
                )}
              </Field>
              <ErrorMessage
                name="lastName"
                component="small"
                className="p-error"
              />
            </Input>

            <Input label="Phone" className="w-full">
              <Field name="phone">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="phone"
                    placeholder="Masukan No Handphone"
                    type="text"
                    {...field}
                    className={touched.phone && errors.phone ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                name="phone"
                component="small"
                className="p-error"
              />
            </Input>
          </div>

          <div className="flex flex-column h-max">
            <Input label="Kota" className="w-full">
              <Field name="kota">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="kota"
                    placeholder="Masukan Kota"
                    type="text"
                    {...field}
                    className={touched.kota && errors.kota ? "p-invalid" : ""}
                  />
                )}
              </Field>
              <ErrorMessage name="kota" component="small" className="p-error" />
            </Input>

            <div className="flex justify-content-between gap-1">
              <Input label="Jalan" className="w-6">
                <Field name="jalan">
                  {({ field }: { field: FieldInputProps<string> }) => (
                    <Input.Text
                      id="jalan"
                      placeholder="Jalan"
                      type="text"
                      {...field}
                      className={
                        touched.jalan && errors.jalan ? "p-invalid" : ""
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="jalan"
                  component="small"
                  className="p-error"
                />
              </Input>

              <Input label="No Rumah" className="w-6">
                <Field name="noRumah">
                  {({ field }: { field: FieldInputProps<string> }) => (
                    <Input.Text
                      id="noRumah"
                      placeholder="No Rumah"
                      type="number"
                      {...field}
                      className={
                        touched.noRumah && errors.noRumah ? "p-invalid" : ""
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="noRumah"
                  component="small"
                  className="p-error"
                />
              </Input>
            </div>

            <Input label="Zipcode" className="w-full">
              <Field name="zipcode">
                {({ field }: { field: FieldInputProps<string> }) => (
                  <Input.Text
                    id="zipcode"
                    placeholder="Masukan Zipcode"
                    type="text"
                    {...field}
                    className={
                      touched.zipcode && errors.zipcode ? "p-invalid" : ""
                    }
                  />
                )}
              </Field>
              <ErrorMessage
                name="zipcode"
                component="small"
                className="p-error"
              />
            </Input>
          </div>

          <div className="flex pt-4 justify-content-between">
            <Button label="Submit" icon="pi pi-save" type="submit" />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormRegister;
