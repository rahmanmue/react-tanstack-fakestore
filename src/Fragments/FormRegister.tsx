import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { useRef } from "react";
import { Input } from "../components";

const FormRegister = () => {
  const stepperRef = useRef(null);

  return (
    <div className="flex flex-column justify-content-center" style={{ maxWidth: "350px" }}>
      <Stepper ref={stepperRef} >
        <StepperPanel>
          <div className="flex flex-column h-max gap-3">
            <Input label="email" className="w-full">
              <Input.Text id="email" placeholder="Masukan Email" type="email" />
            </Input>
            <Input label="username" className="w-full">
              <Input.Text
                id="username"
                placeholder="Masukan Username"
                type="text"
              />
            </Input>
            <Input label="password" className="w-full">
              <Input.Password id="password" placeholder="Masukan Password" />
            </Input>
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() =>
                stepperRef.current &&
                (
                  stepperRef.current as { nextCallback: () => void }
                )?.nextCallback()
              }
            />
          </div>
        </StepperPanel>
        <StepperPanel>
          <div className="flex flex-column h-max gap-3">
            <Input label="first name" className="w-full">
              <Input.Text
                id="first name"
                placeholder="Masukan First Name"
                type="text"
              />
            </Input>
            <Input label="last name" className="w-full">
              <Input.Text
                id="last name"
                placeholder="Masukan Last Name"
                type="text"
              />
            </Input>
            <Input label="phone" className="w-full">
              <Input.Text
                id="phone"
                placeholder="Masukan No Handphone"
                type="text"
              />
            </Input>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() =>
                stepperRef.current &&
                (
                  stepperRef.current as { prevCallback: () => void }
                )?.prevCallback()
              }
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() =>
                stepperRef.current &&
                (
                  stepperRef.current as { nextCallback: () => void }
                )?.nextCallback()
              }
            />
          </div>
        </StepperPanel>
        <StepperPanel>
          <div className="flex flex-column h-max gap-3">
            <Input label="kota" className="w-full">
              <Input.Text id="kota" placeholder="Masukan Kota" type="text" />
            </Input>
            <div className="flex justify-content-between">
              <Input label="jalan" className="w-6">
                <Input.Text
                  id="jalan"
                  placeholder="Masukan Jalan"
                  type="text"
                 
                />
              </Input>
              <Input label="no rumah" className="w-5" >
                <Input.Text
                  id="no rumah"
                  placeholder="No Rumah"
                  type="number"
                />
              </Input>
            </div>
            <Input label="zipcode" className="w-full">
              <Input.Text
                id="zipcode"
                placeholder="Masukan Zipcode"
                type="text"
              />
            </Input>
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() =>
                stepperRef.current &&
                (
                  stepperRef.current as { prevCallback: () => void }
                )?.prevCallback()
              }
            />
            <Button label="Submit" icon="pi pi-check" />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};

export default FormRegister;
