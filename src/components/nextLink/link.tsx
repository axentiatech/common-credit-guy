import React, { ForwardedRef, forwardRef } from 'react';

import { MuiLink } from 'components';

import { NextLinkComposed } from './nextLink';
import { LinkProps } from './interfaces';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      as,
      href,
      legacyBehavior,
      linkAs: linkAsProp,
      locale,
      noLinkStyle,
      prefetch,
      replace,
      scroll,
      shallow,
      ...other
    } = props;

    const isExternal =
      typeof href === 'string' &&
      (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

    if (isExternal) {
      return <MuiLink href={href} ref={ref} {...other} />;
    }

    const linkAs = linkAsProp || as;
    const nextjsProps = {
      to: href,
      linkAs,
      replace,
      scroll,
      shallow,
      prefetch,
      legacyBehavior,
      locale,
    };

    if (noLinkStyle) {
      return <NextLinkComposed ref={ref} {...nextjsProps} {...other} />;
    }

    return <MuiLink ref={ref} {...nextjsProps} {...other} />;
  },
);

export default Link;
