import React, { ForwardedRef, forwardRef } from 'react';
import NextLink from 'next/link';

import { INextLinkComposedProps } from './interfaces';

export const NextLinkComposed = forwardRef<
  HTMLAnchorElement,
  INextLinkComposedProps
>((props: INextLinkComposedProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const {
    to,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior = true,
    locale,
    children,
  } = props;

  return (
    <NextLink
      ref={ref}
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      {children}
    </NextLink>
  );
});
