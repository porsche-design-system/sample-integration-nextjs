import Head from 'next/head';
import React from 'react';
import { PGrid, PHeadline, PGridItem, PDivider, PText } from '@porsche-design-system/components-react';
import RouterComponent from '../components/router';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>PDS in NextJS</title>
            </Head>
            <main>
                <div className={'pageLayout'}>
                    <PGrid>
                        <PGridItem size={'12'}>
                            <PHeadline align={'center'}>
                                Example usage of the Porsche Design System in NextJS
                            </PHeadline>
                        </PGridItem>
                        <PGridItem size={'12'} className={'contentWrapperBig'}>
                            <RouterComponent/>
                        </PGridItem>
                        <PGridItem size={'12'}>
                            <PDivider className={'divider'}/>
                        </PGridItem>
                        <PGridItem size={'12'}>
                            <PText>
                                To See example usage click on one of the Links above.
                            </PText>
                        </PGridItem>
                    </PGrid>
                </div>
            </main>
        </div>
    )
}
