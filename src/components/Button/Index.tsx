import { Button } from "primereact/button";

export interface ButtonProps {
    label: string;
}

const Index: React.FC<ButtonProps> = (props) => {
  const { label } = props
  return (
   <Button label={label}/>
  )
}

export default Index