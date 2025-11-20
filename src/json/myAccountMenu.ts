import { RoutePathEnum } from 'enum';

export interface IMyAccountMenu {
  text: string;
  route: string;
}

export const MyAccountMenu: IMyAccountMenu[] = [
  {
    text: 'Profile',
    route: RoutePathEnum.PROFILE,
  },
  {
    text: 'Document',
    route: RoutePathEnum.MY_DOCUMENT,
  },
  {
    text: 'LogOut',
    route: RoutePathEnum.SIGN_IN,
  },
];
