export interface ISelectProps {
  items: {label: string; value: string}[];
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
  label?: string;
  errorMessage?: string;
  placeholder: {
    label: string;
    value: string;
    color: string;
  };
}
