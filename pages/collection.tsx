import type { AccordionChangeEvent } from '@porsche-design-system/components-react';
import {
  PButton,
  PButtonPure,
  PDivider,
  PGrid,
  PGridItem,
  PHeadline,
  PIcon,
  PLink,
  PLinkPure,
  PPagination,
  PSpinner,
  PAccordion,
  PText,
} from '@porsche-design-system/components-react';
import React, { useCallback, useState } from 'react';
import Header from '../components/header';
import Head from 'next/head';

const CollectionPage = (): JSX.Element => {
  const [submit, setSubmit] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [isAccordion1Open, setIsAccordion1Open] = useState<boolean>(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState<boolean>(false);

  const handleSubmit = (e: React.MouseEvent<{}, MouseEvent>): void => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleDismiss = (e: React.MouseEvent<{}, MouseEvent>): void => {
    e.preventDefault();
    setSubmit(false);
  };

  const handleActivePage = (event: CustomEvent): void => {
    setActivePage(event.detail.page);
  };

  const onAccordion1Change = useCallback((e: CustomEvent<AccordionChangeEvent>) => {
    setIsAccordion1Open(e.detail.open);
  }, []);
  const onAccordion2Change = useCallback((e: CustomEvent<AccordionChangeEvent>) => {
    setIsAccordion2Open(e.detail.open);
  }, []);

  const content =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ' +
    'dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';

  return (
    <div className="pageLayout">
      <Head>
        <title>NextJS sample project - Collection</title>
      </Head>
      <Header />
      <PGrid>
        <PGridItem size={12}>
          <PHeadline variant="headline-4">Buttons</PHeadline>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
        </PGridItem>
        <PGridItem size={12}>
          {/*To illustrate the mock procedure during the tests the buttons insert/dismiss a headline*/}
          {submit ? <PHeadline variant="headline-4">Hello</PHeadline> : ''}
          <PButton type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </PButton>
        </PGridItem>
        <PGridItem size={12} className="contentWrapperSmall">
          <PButtonPure type="submit" onClick={(e) => handleDismiss(e)}>
            Dismiss
          </PButtonPure>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
        </PGridItem>
        <PGridItem size={12}>
          <PHeadline variant="headline-4">Links</PHeadline>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
        </PGridItem>
        {/*Example of all Link variation which are provided by the Porsche Design System*/}
        <PGridItem size={12}>
          <PLink href="https://porsche.com">porsche.com</PLink>
        </PGridItem>
        <PGridItem size={12} className="contentWrapperBig">
          <PLinkPure href="https://example.com">Test PLinkPure</PLinkPure>
          <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
        </PGridItem>
        <PGridItem size={12}>
          <PHeadline variant="headline-4">Icons</PHeadline>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
        </PGridItem>
        <PGridItem size={12}>
          <PSpinner size="small" />
        </PGridItem>
        <PGridItem size={12}>
          <PIcon size="medium" name="highway" role="img" />
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
        </PGridItem>
        <PGridItem size={12}>
          {/* Simple usage of PPagination. By linking state to activePage, we can listen to the pageChange event of
                the component*/}
          <PHeadline variant="headline-4">You are on Page {activePage} Page</PHeadline>
        </PGridItem>
        <PGridItem size={12}>
          <div className="accordion-wrapper">
            <PAccordion heading="Some Heading" tag="h3" open={isAccordion1Open} onAccordionChange={onAccordion1Change}>
              <PText>{content}</PText>
              <PText>{content}</PText>
            </PAccordion>
            <PAccordion heading="Some Heading" tag="h3" open={isAccordion2Open} onAccordionChange={onAccordion2Change}>
              <PText>{content}</PText>
              <PText>{content}</PText>
            </PAccordion>
          </div>
        </PGridItem>
        <PGridItem size={12}>
          <PPagination
            data-testid="pagination"
            totalItemsCount={11}
            itemsPerPage={3}
            activePage={activePage}
            onPageChange={(e) => handleActivePage(e)}
          />
        </PGridItem>
      </PGrid>
    </div>
  );
};

export default CollectionPage;
