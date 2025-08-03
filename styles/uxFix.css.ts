import { style } from '@vanilla-extract/css';

export const comparisonSection = style({
  padding: '4rem 2rem',
  maxWidth: '900px',
  margin: '0 auto',
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
});

export const comparisonGrid = style({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const exampleBlock = style({
  width: '250px',
  textAlign: 'center',
});

export const label = style({
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

export const badDeleteButton = style({
  fontSize: '1.5rem',
  background: '#f8d7da',
  border: '1px solid #f5c2c7',
  padding: '0.75rem',
  borderRadius: '4px',
  cursor: 'pointer',
});

export const goodDeleteButton = style({
  fontSize: '1rem',
  background: '#dc3545',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.25rem',
  borderRadius: '4px',
  cursor: 'pointer',
});

export const comment = style({
  marginTop: '1rem',
  fontSize: '0.95rem',
  color: '#555',
});

