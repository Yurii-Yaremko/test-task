import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  // Typography
  fontBase: '"Poppins", sans-serif',
  fontCode: 'Monaco, Consolas, "Courier New", monospace',

  // Brand
  brandTitle: 'Pokemon Trainer',
  brandUrl: 'http://localhost:6006',
  brandImage: '../src/assets/logo.svg',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#3B3B3B',
  colorSecondary: '#3358CC',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#E8E8E8',
  appBorderRadius: 8,

  // Text colors
  textColor: '#3B3B3B',
  textInverseColor: '#FFFFFF',

  // Toolbar
  barTextColor: '#6B6B6B',
  barSelectedColor: '#3358CC',
  barBg: '#FFFFFF',

  // Form
  inputBg: '#FFFFFF',
  inputBorder: '#E8E8E8',
  inputTextColor: '#3B3B3B',
  inputBorderRadius: 8,
}); 