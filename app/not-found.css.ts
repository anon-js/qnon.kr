import { style } from '@vanilla-extract/css';

export const h2 = style({
  fontSize: '2rem',
  marginBottom: '1rem',
  letterSpacing: '-0.02em',
});

export const p = style({
  marginTop: 0,
  marginBottom: '4rem',
});

export const button = style({
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#005bb5',
  },
});

// section
// h2
// p
// button