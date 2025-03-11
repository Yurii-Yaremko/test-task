import type { Pokemon } from './types';

interface SelectDropdownProps {
  isLoading: boolean;
  filteredPokemon: Pokemon[];
  selectedPokemon: Pokemon[];
  onSelect: (pokemon: Pokemon) => void;
}

export const SelectDropdown = ({ 
  isLoading, 
  filteredPokemon, 
  selectedPokemon, 
  onSelect 
}: SelectDropdownProps) => (
  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
    {isLoading ? (
      <div className="p-4 text-center text-gray-500">Loading...</div>
    ) : filteredPokemon.length === 0 ? (
      <div className="p-4 text-center text-gray-500">No Pokémon found</div>
    ) : (
      filteredPokemon.map((pokemon) => (
        <div
          key={pokemon.name}
          className={`px-4 py-3 cursor-pointer text-base ${
            selectedPokemon.find(p => p.name === pokemon.name)
              ? 'bg-blue-50 text-blue-700'
              : 'text-gray-900 hover:bg-gray-50'
          }`}
          onClick={() => onSelect(pokemon)}
        >
          <span className="capitalize">{pokemon.name}</span>
        </div>
      ))
    )}
  </div>
); 