import {Input} from '../components/index'
import { Button } from 'primereact/button'

const FormLogin = () => {
  return (
    <div className="flex flex-column gap-3 w-max justify-content-center">
       <Input label="username" className="w-full">
          <Input.Text id="username" placeholder="Masukan Username" type="text"/>
       </Input>

       <Input label="password" className="w-full">
          <Input.Password id="password" placeholder="Masukan Password"/>
       </Input>

       <Button label="Login"/>
    </div>

  )
}

export default FormLogin