import { style } from '@vanilla-extract/css';

export const chatWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',
});

export const chatContainer = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  overflowY: 'auto',
  gap: '1rem',
  backgroundColor: '#fafafa',
});

export const messageBubble = style({
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  maxWidth: '80%',
  display: 'inline-block',
  position: 'relative',
});

export const botMsg = style({
  backgroundColor: '#f1f1f1',
  alignSelf: 'flex-start',
  textAlign: 'left',
});

export const userMsg = style({
  backgroundColor: '#d1e7dd',
  alignSelf: 'flex-end',
  textAlign: 'right',
});

export const meta = style({
  fontSize: '0.75rem',
  color: '#888',
  marginTop: '0.25rem',
  display: 'block',
});

export const inputWrapper = style({
  padding: '0.75rem 1rem',
  borderTop: '1px solid #ddd',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  position: 'sticky',
  bottom: 0,
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