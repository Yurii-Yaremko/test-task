import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  brandTitle: 'Luna Edge Components',
  brandUrl: 'https://luna-edge.com',
  brandImage: '/logos/LunaEdgeLogo.svg',
  brandTarget: '_self',

  colorPrimary: '#3B3B3B',
  colorSecondary: '#3358CC',

  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E8E8E8',
  appBorderRadius: 8,

  fontBase: '"Poppins", sans-serif',
  fontCode: 'monospace',

  textColor: '#333333',
  textInverseColor: '#FFFFFF',
}); 