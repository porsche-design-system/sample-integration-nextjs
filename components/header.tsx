import React from 'react';
import Link from 'next/link';
import { PLinkPure, PGrid, PGridItem, PHeadline, PDivider } from '@porsche-design-system/components-react';
import PrefixedLink from './prefixedLink';

const Header = (): JSX.Element => (
  <PGrid>
    <PGridItem size={12}>
      <PHeadline variant="headline-2" align="center">
        Example usage of the Porsche-Design-System NextJS
      </PHeadline>
    </PGridItem>
    <PGridItem size={12}>
      <PDivider className="divider" />
    </PGridItem>
    <PGridItem size={12}>
      <PrefixedLink href="/collection">
        <PLinkPure href="/collection">Components Collection</PLinkPure>
      </PrefixedLink>
      <PrefixedLink href="/forms">
        <PLinkPure href="/forms">Forms</PLinkPure>
      </PrefixedLink>
      <PrefixedLink href="/phn-header">
        <PLinkPure href="/phn-header">Phn Header</PLinkPure>
      </PrefixedLink>
    </PGridItem>
    <PGridItem size={12}>
      <PDivider className="divider" />
    </PGridItem>
  </PGrid>
);

export default Header;
