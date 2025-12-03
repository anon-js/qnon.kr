import { IconBrandGithub } from '@tabler/icons-react';
import { Mail } from 'lucide-react';
import type { ElementType } from 'react';

export type ButtonListType = {
  label: string;
  href: string;
  icon?: ElementType;
};

export const ACTIONS: ButtonListType[] = [
  { label: '프로젝트', href: '/project' },
  { label: '학력', href: '/edu' },
  { label: '경험', href: '/exp' },
];

export const CONTACTS: ButtonListType[] = [
  { label: '메일', href: 'mailto:anon@qnon.kr', icon: Mail },
  { label: '깃허브', href: 'https://github.com/anon-js', icon: IconBrandGithub },
];

export const CARD_DIMENSIONS = {
  MOBILE: {
    PORTRAIT: { w: 320, h: 540 },
    LANDSCAPE: { w: 540, h: 320 },
  },
  DESKTOP: { w: 720, h: 400 },
};
