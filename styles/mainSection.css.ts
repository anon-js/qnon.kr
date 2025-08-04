import { style } from '@vanilla-extract/css';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth: 1200,
  minHeight: '90vh',
  margin: '0 auto',
  padding: '0 1.2rem',
});

export const title = style({
  fontSize: '3rem',
  fontWeight: 700,
  lineHeight: 1.2,
  marginTop: '0.5rem',
});

export const highlight = style({
  color: '#0077ffff',
  fontWeight: 800,
});

export const subtext = style({
  fontSize: '1rem',
  lineHeight: 1.6,
});

export const textBlock = style({
  marginTop: '4rem',
  fontSize: '1.25rem',
  lineHeight: 1.7,
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});