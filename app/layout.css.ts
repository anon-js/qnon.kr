import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
});

export const logo = style({
  margin: '12px',
});

export const logoLink = style({
  textDecoration: 'none',
  color: '#1d1d1f',
  ':hover': {
    cursor: 'pointer',
  },
});

export const nav = style({
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
});

export const navLink = style({
  textDecoration: 'none',
  color: '#7f7f8b',
  ':hover': {
    color: '#1d1d1f',
  },
});

export const footer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#7f7f8b',
  padding: '12px 0',
});