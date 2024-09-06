export interface InputProps {
  type?: "text" | "submit" | "email" | "number" | "password" | "search";
  id?: string;
  name: string;
  label: string;
  value?: string;
  placeholder: string;
}
