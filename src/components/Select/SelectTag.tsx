import { XMarkIcon } from '@heroicons/react/24/solid';
import type { Pokemon } from './types';

interface SelectTagProps {
  pokemon: Pokemon;
  onRemove: (pokemon: Pokemon) => void;
}

export const SelectTag = ({ pokemon, onRemove }: SelectTagProps) => (
  <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
    {pokemon.name}
    <XMarkIcon
      className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onRemove(pokemon);
      }}
    />
  </span>
); 