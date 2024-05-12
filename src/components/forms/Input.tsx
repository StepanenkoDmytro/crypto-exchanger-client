import './Input.css';

type InputProps = {
    value: any;
    type?: string;
    label?: string;
    placeholder?: string;
    id?: string;
    onInput?: (value: any) => void;
    readonly?: boolean;
  };
  
  export default function Input({
    value,
    type = 'text',
    label,
    placeholder,
    id,
    onInput,
    readonly = false,
  }: InputProps) {
  
    return (
      <>
        <div className="input-wrapper">
          {label && <div className="input-label">{label}</div>}
          <input
            id={id}
            className="input-element"
            type={type}
            value={value}
            placeholder={placeholder}
            readOnly={readonly}
            onInput={(event) => onInput && onInput((event.target as HTMLInputElement)?.value)}
          />
        </div>
      </>
    );
  }
  