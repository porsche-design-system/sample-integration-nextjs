import { PDivider, PHeadline } from '@porsche-design-system/components-react/ssr';
import React from 'react';
import PrefixedLink from './prefixedLink';

const Header = (): JSX.Element => (
  <>
    <PHeadline variant="headline-2" align="center">
      Example usage of the Porsche-Design-System NextJS
    </PHeadline>
    <PDivider className="divider" />

    <PrefixedLink href="/collection">Collection</PrefixedLink>
    <PrefixedLink href="/forms">Forms</PrefixedLink>
    <PrefixedLink href="/utilities">Utilities</PrefixedLink>
    <PrefixedLink href="/phn-header">Phn Header</PrefixedLink>
    <PrefixedLink href="/layout-shift">Layout Shift</PrefixedLink>

    <PDivider className="divider" />
  </>
);

export default Header;
