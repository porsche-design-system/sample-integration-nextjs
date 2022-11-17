import { PLinkPure } from '@porsche-design-system/components-react/ssr';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

const PrefixedLink = ({ href, ...props }: PropsWithChildren<LinkProps>): JSX.Element => (
  <PLinkPure>
    <Link href={href} as={`${process.env.BASE_PATH ?? ''}${href}`} {...props} />
  </PLinkPure>
);

export default PrefixedLink;
