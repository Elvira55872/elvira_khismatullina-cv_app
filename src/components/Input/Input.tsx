import { InputContainer, InputStyled, LabelStyled } from "./styles";
import { InputProps } from "./types";

function Input({
  type = "text",
  id,
  name,
  label,
  value,
  placeholder,
}: InputProps) {
  return (
    <InputContainer>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;
