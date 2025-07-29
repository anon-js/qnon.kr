import { globalStyle } from '@vanilla-extract/css';

globalStyle("*", {
    WebkitUserSelect: "none",
    userSelect: "none",
    wordBreak: "keep-all",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif",
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
