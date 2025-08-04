import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fdfdfd',
  textAlign: 'center',
  padding: '2rem',
});

export const heading = style({
  fontSize: '4rem',
  fontWeight: 'bold',
  margin: 0,
  color: '#1d1d1f',
});

export const subtext = style({
  fontSize: '1.2rem',
  marginTop: '1rem',
});
