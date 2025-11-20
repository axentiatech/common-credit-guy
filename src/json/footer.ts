import {
  faEnvelope,
  faMessage,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { RoutePathEnum } from 'enum';

export interface IGetInTouch {
  text: string;
  icon: IconDefinition;
}

export interface IQuickLink {
  text: string;
  route: string;
}

export interface IQuickMenu {
  text: string;
  route: string;
}

export const getInTouch: IGetInTouch[] = [
  {
    text: 'info@commoncreditguy.com',
    icon: faMessage,
  },
  {
    text: 'instagram.com/commoncreditguy/',
    icon: faUser,
  },
  {
    text: '123-456-7890',
    icon: faEnvelope,
  },
];

export const quickLink: IQuickLink[] = [
  {
    text: 'Privacy Policy',
    route: RoutePathEnum.PRIVACY_POLICY,
  },
  {
    text: 'Terms of Service',
    route: RoutePathEnum.TERMS_OF_SERVICE,
  },
  {
    text: 'Help',
    route: RoutePathEnum.HELP,
  },
];

export const quickMenu: IQuickMenu[] = [
  {
    text: 'About',
    route: RoutePathEnum.ABOUT,
  },
  {
    text: 'Blog',
    route: RoutePathEnum.BLOG,
  },
  {
    text: 'Products',
    route: RoutePathEnum.PRODUCTS,
  },
];
