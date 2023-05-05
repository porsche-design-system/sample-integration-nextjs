import type { AccordionUpdateEvent, TabsBarUpdateEvent } from '@porsche-design-system/components-react/ssr';
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
  PPopover,
  PSpinner,
  PAccordion,
  PText,
  useToastManager,
  PTabsBar,
  PLinkTile,
} from '@porsche-design-system/components-react/ssr';
import React, { useCallback, useState } from 'react';
import Header from '../components/header';
import Head from 'next/head';

const CollectionPage = (): JSX.Element => {
  const [submit, setSubmit] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [isAccordion1Open, setIsAccordion1Open] = useState<boolean>(false);
  const [isAccordion2Open, setIsAccordion2Open] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>();
  const onTabsBarUpdate = useCallback((e: CustomEvent<TabsBarUpdateEvent>) => {
    setTabIndex(e.detail.activeTabIndex);
  }, []);
  const { addMessage } = useToastManager();

  const handleSubmit = (e: React.MouseEvent<{}, MouseEvent>): void => {
    addMessage({ text: 'Submit successful', state: 'success' });
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

  const onAccordion1Update = useCallback((e: CustomEvent<AccordionUpdateEvent>) => {
    setIsAccordion1Open(e.detail.open);
  }, []);

  const onAccordion2Update = useCallback((e: CustomEvent<AccordionUpdateEvent>) => {
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
          <PDivider className="divider" />
          {/* To illustrate the mock procedure during the tests the buttons insert/dismiss a headline */}
          {submit && <PHeadline variant="headline-4">Hello</PHeadline>}
          <PButton type="submit" onClick={handleSubmit}>
            Submit
          </PButton>
        </PGridItem>
        <PGridItem size={12} className="contentWrapperSmall">
          <PButtonPure type="submit" onClick={handleDismiss}>
            Dismiss
          </PButtonPure>
        </PGridItem>

        <PGridItem size={12}>
          <PDivider className="divider" />
          <PHeadline variant="headline-4">Links</PHeadline>
          <PDivider className="divider" />

          {/* Example of all Link variation which are provided by the Porsche Design System */}
          <PLink href="https://porsche.com">porsche.com</PLink>
        </PGridItem>
        <PGridItem size={12} className="contentWrapperBig">
          <PLinkPure href="https://example.com" stretch={true}>
            Test PLinkPure
          </PLinkPure>
          <PLinkPure href="#propHashTest">Test propHash</PLinkPure>
        </PGridItem>
        <PGridItem size={5}>
          <PLinkTile href="#" label="Some Label" description="Default">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD2vP9xXLiUAAAAAXRSTlMAQObYZgAAABxJREFUGNNjYOBgYGBhYKAZ/R8MDsD4Q5amkz8ASp4PtTYYQZIAAAAASUVORK5CYII="
              alt="Some alt text"
            />
          </PLinkTile>
        </PGridItem>
        <PGridItem size={12}>
          <PDivider className="divider" />
          <PHeadline variant="headline-4">Tabs</PHeadline>
          <PDivider className="divider" />
        </PGridItem>

        <PGridItem size={12}>
          <PTabsBar activeTabIndex={tabIndex} onUpdate={onTabsBarUpdate}>
            <button type="button">Tab One</button>
            <button type="button">Tab Two</button>
            <button type="button">Tab Three</button>
          </PTabsBar>
        </PGridItem>

        <PGridItem size={12}>
          <PDivider className="divider" />
          <PHeadline variant="headline-4">Icons</PHeadline>
          <PDivider className="divider" />

          <PSpinner size="small" />
        </PGridItem>
        <PGridItem size={12}>
          <PIcon size="medium" name="highway" role="img" />
        </PGridItem>

        <PGridItem size={12}>
          <PDivider className="divider" />
          <PHeadline variant="headline-4">Accordion</PHeadline>
          <PDivider className="divider" />

          <div className="accordion-wrapper">
            <PAccordion heading="Some Heading" tag="h3" open={isAccordion1Open} onUpdate={onAccordion1Update}>
              <PText>{content}</PText>
              <PText>{content}</PText>
            </PAccordion>
            <PAccordion heading="Some Heading" tag="h3" open={isAccordion2Open} onUpdate={onAccordion2Update}>
              <PText>{content}</PText>
              <PText>{content}</PText>
            </PAccordion>
          </div>
        </PGridItem>

        <PGridItem size={12}>
          <PDivider className="divider" />
          <PHeadline variant="headline-4">Popover</PHeadline>
          <PDivider className="divider" />
          <PText>
            Lorem ipsum dolor sit amet, <PPopover>Some descriptive content</PPopover> consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            <PPopover description="Short info opened top" direction="top"></PPopover>
            sed diam voluptua.
          </PText>
        </PGridItem>

        <PGridItem size={12}>
          <PDivider className="divider" />
          {/* Simple usage of PPagination. By linking state to activePage, we can listen to the pageChange event of
                the component*/}
          <PHeadline variant="headline-4">You are on Page {activePage} Page</PHeadline>
          <PDivider className="divider" />

          <PPagination
            data-testid="pagination"
            totalItemsCount={11}
            itemsPerPage={3}
            activePage={activePage}
            onPageChange={handleActivePage}
          />
        </PGridItem>
      </PGrid>
    </div>
  );
};

export default CollectionPage;
