import { style } from '@vanilla-extract/css';

export const section = style({
  padding: '4rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  color: '#1a1a1a',
});

export const titleStyle = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: 1.4,
});

export const descriptionStyle = style({
  marginTop: '1.5rem',
  fontSize: '1.1rem',
  lineHeight: 1.7,
  color: '#444',
});
