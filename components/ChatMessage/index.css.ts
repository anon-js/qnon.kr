import { style } from '@vanilla-extract/css';

export const chatContainer = style({
  maxWidth: '500px',
  margin: '0 auto',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontFamily: 'sans-serif',
});

export const messageBubble = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
  borderRadius: '8px',
  padding: '0.75rem 1rem',
  maxWidth: '85%',
  transition: 'all 0.3s ease-in-out',
});

export const botMsg = style({
  backgroundColor: '#f1f1f1',
  alignSelf: 'flex-start',
});

export const userMsg = style({
  backgroundColor: '#d1e7dd',
  alignSelf: 'flex-end',
});

export const meta = style({
  fontSize: '0.75rem',
  color: '#888',
  marginTop: '0.25rem',
  display: 'block',
});

export const avatar = style({
  fontSize: '1.25rem',
});

export const inputRow = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
});

export const input = style({
  flex: 1,
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '6px',
});

export const button = style({
  padding: '0.5rem 1rem',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
});
