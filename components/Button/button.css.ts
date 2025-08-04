import { style } from "@vanilla-extract/css";

export const button = style({
  marginTop: '4rem',
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: 'none',
  background: '#1e6dff',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background 0.3s',
  ':hover': {
    background: '#1255d1',
  },
});