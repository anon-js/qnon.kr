import { globalStyle } from '@vanilla-extract/css';
import { g } from 'framer-motion/client';

globalStyle("*", {
    WebkitUserSelect: "none",
    userSelect: "none",
    wordBreak: "keep-all",
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif",
});

globalStyle("html, body", {
  margin:  0,
  padding: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: '#1d1d1f',
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: 700,
});

globalStyle("p", {
  fontSize: '1.025rem',
  margin: 0,
  letterSpacing: '-0.02em',
  color: '#38383b',
  lineHeight: '1.6',
});
