interface SelectInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onClick: (e: React.MouseEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  showPlaceholder: boolean;
}

export const SelectInput = ({ 
  value, 
  onChange, 
  placeholder, 
  onClick, 
  inputRef,
  showPlaceholder 
}: SelectInputProps) => (
  <input
    ref={inputRef}
    type="text"
    className="flex-1 min-w-[60px] bg-transparent outline-none text-gray-900 placeholder-gray-500 text-base"
    placeholder={showPlaceholder ? placeholder : 'Type to search...'}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onClick={onClick}
  />
); 