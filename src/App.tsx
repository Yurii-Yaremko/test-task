import { PokemonForm } from './components/Form/PokemonForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Pokemon Team Builder</h1>
        
        <PokemonForm />
      </div>
    </div>
  );
}

export default App;
