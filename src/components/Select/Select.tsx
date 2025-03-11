import { useState, useRef } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { SelectTag } from './SelectTag';
import { SelectInput } from './SelectInput';
import { SelectDropdown } from './SelectDropdown';
import { useClickOutside } from './hooks/useClickOutside';
import { styles } from './styles';
import type { Pokemon, SelectProps } from './types';

export const Select = ({
  value,
  onChange,
  maxItems = 4,
  placeholder = 'Select...',
  isLoading = false,
  pokemon = [],
  error
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const filteredPokemon = pokemon.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (pokemon: Pokemon) => {
    if (value.find(p => p.name === pokemon.name)) {
      onChange(value.filter(p => p.name !== pokemon.name));
    } else if (value.length < maxItems) {
      onChange([...value, pokemon]);
    }
    setSearchTerm('');
  };

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
    inputRef.current?.focus();
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div
        className={styles.wrapper(isOpen, error)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.tagsContainer}>
          {value.map((pokemon) => (
            <SelectTag
              key={pokemon.name}
              pokemon={pokemon}
              onRemove={(p) => onChange(value.filter(v => v.name !== p.name))}
            />
          ))}
          <SelectInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder={placeholder}
            onClick={handleInputClick}
            inputRef={inputRef}
            showPlaceholder={value.length === 0}
          />
        </div>
        <div className="pr-3">
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>

      {error && (
        <p className={styles.errorText}>{error}</p>
      )}

      {isOpen && (
        <SelectDropdown
          isLoading={isLoading}
          filteredPokemon={filteredPokemon}
          selectedPokemon={value}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}; 