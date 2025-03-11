import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from '../Select/Select';
import { PokemonModal } from '../Modal/PokemonModal';

interface FormInputs {
  firstName: string;
  lastName: string;
}

interface Pokemon {
  name: string;
  url: string;
}

export const PokemonForm = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonList(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
        setIsLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const onSubmit = (data: FormInputs) => {
    if (selectedPokemon.length === 4) {
      setIsModalOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <input
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
            maxLength: { value: 12, message: "Maximum 12 characters" },
            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" }
          })}
          className="w-full p-2 border rounded"
          placeholder="First Name"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("lastName", {
            required: "Last name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
            maxLength: { value: 12, message: "Maximum 12 characters" },
            pattern: { value: /^[A-Za-z]+$/, message: "Only letters allowed" }
          })}
          className="w-full p-2 border rounded"
          placeholder="Last Name"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <Select
        value={selectedPokemon}
        onChange={setSelectedPokemon}
        maxItems={4}
        placeholder="Select your Pokémon team..."
        isLoading={isLoading}
        pokemon={pokemonList}
        error={selectedPokemon.length < 4 ? "Please select 4 Pokémon" : undefined}
      />

      <button
        type="submit"
        disabled={selectedPokemon.length !== 4}
        className={`
          w-full p-2 rounded text-white
          ${selectedPokemon.length === 4 
            ? 'bg-blue-500 hover:bg-blue-600' 
            : 'bg-gray-300 cursor-not-allowed'}
        `}
      >
        View Team
      </button>

      {isModalOpen && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </form>
  );
}; 