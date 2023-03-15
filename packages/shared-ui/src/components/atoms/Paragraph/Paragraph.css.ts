import { styleVariants } from '@vanilla-extract/css';

export const textColor = styleVariants({
  primary: { color: 'green' },
  secondary: { color: 'red' }
});