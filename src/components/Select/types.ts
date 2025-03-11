export interface Pokemon {
  name: string;
  url: string;
  sprite?: string;
}

export interface SelectProps {
  value: Pokemon[];
  onChange: (value: Pokemon[]) => void;
  pokemon: Pokemon[];
  maxItems?: number;
  placeholder?: string;
  isLoading?: boolean;
  error?: string;
} 