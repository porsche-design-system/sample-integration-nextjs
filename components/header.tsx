import React from 'react'
import Link from 'next/link'
import { PLinkPure, PGrid, PGridItem, PHeadline, PDivider } from '@porsche-design-system/components-react';

const Header = (): JSX.Element => (
    <PGrid>
        <PGridItem size={12}>
            <PHeadline variant="headline-2" align="center">Example usage of the Porsche-Design-System NextJS</PHeadline>
        </PGridItem>
        <PGridItem size={12}>
            <PDivider className="divider"/>
        </PGridItem>
        <PGridItem size={12}>
            <Link href="/collection">
                <PLinkPure>Components Collection</PLinkPure>
            </Link>
            <Link href="/forms">
                <PLinkPure>Forms</PLinkPure>
            </Link>
            <Link href="/phn-header">
                <PLinkPure>Phn Header</PLinkPure>
            </Link>
        </PGridItem>
        <PGridItem size={12}>
            <PDivider className="divider"/>
        </PGridItem>
    </PGrid>
);

export default Header;
