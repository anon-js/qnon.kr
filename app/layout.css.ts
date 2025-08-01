import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0.5rem 1.2rem',
});

export const logoLink = style({
  textDecoration: 'none',
  color: '#1d1d1f',
  ':hover': {
    cursor: 'pointer',
  },
});

export const nav = style({
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
});

export const navLink = style({
  padding: '0.5rem 0.25rem',
  textDecoration: 'none',
  color: '#595961',
  fontWeight: 500,
  fontSize: '1.025rem',
  transition: 'color 0.3s ease',
  ':hover': {
    cursor: 'pointer',
    color: '#1d1d1f',
  },
});

export const footer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#595961',
  padding: '0.8rem',
});