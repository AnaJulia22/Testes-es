import { FC } from "react";
interface ICheckBox{
    onClick?: () => void;
    disabled?: boolean;
}

const Checkbox: FC<ICheckBox> = ({
    onClick,
    disabled
  }) => {
    return (
      <Checkbox
        onClick={onClick}
        disabled={disabled}
      >
      </Checkbox>
    );
  };
export default Checkbox;