import {FormLogin} from '../Fragments/index'

export interface AuthLayoutProps {
    title : string;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const {title} = props;
  return (
    <div className="flex flex-column justify-content-center">
        <h3>{title}</h3>
        <FormLogin/>
    </div>
  )
}

export default AuthLayout