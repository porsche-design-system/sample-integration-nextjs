import Link from 'next/link'
import { PLinkPure } from '@porsche-design-system/components-react';

function RouterComponent() {
    return (
        <>
            <Link href="/componentsCollection">
                <PLinkPure>Components Collection</PLinkPure>
            </Link>
            <Link href="/forms">
                <PLinkPure>Forms</PLinkPure>
            </Link>
        </>
    )
}

export default RouterComponent
