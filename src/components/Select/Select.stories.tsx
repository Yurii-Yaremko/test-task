import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';
import type { Pokemon } from './types';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWrapper = (args: any) => {
  const [value, setValue] = useState<Pokemon[]>([]);
  return (
    <div className="w-[400px]">
      <Select
        {...args}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <div className="w-[400px] p-4">
      <SelectWrapper {...args} />
    </div>
  ),
  args: {
    maxItems: 4,
    placeholder: 'Select Pokémon...',
    isLoading: false,
    pokemon: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
      { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
    ],
  },
};

export const Loading: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const WithError: Story = {
  render: (args) => <SelectWrapper {...args} />,
  args: {
    ...Default.args,
    error: 'Please select 4 Pokémon',
  },
};