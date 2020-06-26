import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';
import { PLinkPure} from '@porsche-design-system/components-react';

const PrefixedLink = ({ href, ...props }: PropsWithChildren<LinkProps>): JSX.Element => (
     <PLinkPure {...props}>
         <Link href={href} as={`${process.env.BASE_PATH ?? ''}${href}`} {...props} />
     </PLinkPure>
);

export default PrefixedLink;
