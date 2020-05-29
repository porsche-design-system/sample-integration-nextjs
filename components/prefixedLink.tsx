import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

const PrefixedLink = ({ href, ...props }: PropsWithChildren<LinkProps>): JSX.Element => (
  <Link href={href} as={`${process.env.BACKEND_URL ?? ''}${href}`} {...props} />
);

export default PrefixedLink;
