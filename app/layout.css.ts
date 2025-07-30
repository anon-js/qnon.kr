import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0.2rem 0',
});

export const logo = style({
  margin: '0.8rem',
});

export const logoLink = style({
  textDecoration: 'none',
  color: '#1d1d1f',
  ':hover': {
    cursor: 'pointer',
  },
});

export const nav = style({
  margin: '0 0.8rem',
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const navLink = style({
  textDecoration: 'none',
  color: '#595961',
  ':hover': {
    color: '#1d1d1f',
  },
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flex: 1,
  padding: '4rem',
});

export const footer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#595961',
  padding: '0.8rem',
});