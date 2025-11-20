import { AnchorHTMLAttributes } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';

export interface INextLinkComposedProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<
      NextLinkProps,
      'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'
    > {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
}

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps['as'];
  href: NextLinkProps['href'];
  linkAs?: NextLinkProps['as']; // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean;
} & Omit<INextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>;
