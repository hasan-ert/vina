//Button.tsx
import React from "react";
import { Button } from "react-bootstrap";

//style
import "./CustomButton.css"

//create the button Props
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  startIcon?: React.ReactNode;
  //write other extra props here...
}
const CustomButton = ({ startIcon, children, className, ...props }: ButtonProps) => {
  //render the button
  return (
    <>
    <Button className={"custom-btn " + className} {...props}>
      <h5>
      {children}
      </h5>
    </Button>
    </>
  );
};
export default CustomButton;