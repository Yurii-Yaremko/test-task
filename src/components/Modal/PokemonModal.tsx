import { useEffect, useState } from 'react';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonModalProps {
  pokemon: Pokemon[];
  onClose: () => void;
}

export const PokemonModal = ({ pokemon, onClose }: PokemonModalProps) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const details = await Promise.all(
          pokemon.map(async (p) => {
            const response = await axios.get(p.url);
            return response.data;
          })
        );
        setPokemonDetails(details);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [pokemon]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Pokemon Team</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-8">Loading team details...</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pokemonDetails.map((pokemon) => (
              <div key={pokemon.name} className="flex flex-col items-center p-4 border rounded-lg">
                <img 
                  src={pokemon.sprites.front_default} 
                  alt={pokemon.name}
                  className="w-24 h-24 object-contain"
                />
                <span className="mt-2 capitalize">{pokemon.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 