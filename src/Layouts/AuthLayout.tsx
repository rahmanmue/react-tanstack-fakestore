export interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { title, children } = props;
  return (
    <div className="min-h-screen bg-primary flex flex-column align-items-center justify-content-center py-5">
      <div className="card p-5 bg-white border-round" style={{ width: "40%" }}>
        <h3 className="text-black-alpha-80 my-0">{title}</h3>
        <p className="text-black-alpha-80">
          {title === "Login"
            ? "Belum punya akun? Daftar disini"
            : "Sudah punya akun? Masuk disini"}
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
