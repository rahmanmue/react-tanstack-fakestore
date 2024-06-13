import { FormLogin } from "../Fragments";
import { AuthLayout } from "../Layouts/index";

const Login = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default Login;
