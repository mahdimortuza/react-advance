import { forwardRef } from "react";

type TCustomInputProps = {
  className: string;
};

const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, inputRef) => {
    return (
      <div>
        <input
          ref={inputRef}
          className={className}
          name="name"
          type="text"
        ></input>
      </div>
    );
  }
);

export default CustomInput;
