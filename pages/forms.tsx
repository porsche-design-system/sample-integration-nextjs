import {
  PCheckboxWrapper,
  PDivider,
  PFlex,
  PFlexItem,
  PHeadline,
  PRadioButtonWrapper,
  PSelectWrapper,
  PTextareaWrapper,
  PTextFieldWrapper,
} from '@porsche-design-system/components-react';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Header from '../components/header';
import Head from 'next/head';

const FormsPage = (): JSX.Element => {
  const [select, setSelect] = useState('Change this Headline by selecting');
  const [checkBox, setCheckBox] = useState(false);
  const [radioButton, setRadioButton] = useState(false);
  const [textField, setTextField] = useState('Change this Headline by typing');

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelect(e.target.value);
  };

  const handleCheckBox = (e: FormEvent<HTMLInputElement>): void => {
    if (checkBox) {
      setCheckBox(false);
    } else {
      setCheckBox(true);
    }
  };

  const handleRadioButton = (e: FormEvent<HTMLInputElement>): void => {
    setRadioButton(true);
  };

  const handleTextField = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextField(e.target.value);
  };

  return (
    <div className="pageLayout">
      <Head>
        <title>NextJS sample project - Forms</title>
      </Head>
      <Header />
      <PFlex direction="column">
        <PFlexItem>
          <PHeadline variant="headline-3">Form examples</PHeadline>
        </PFlexItem>
        <PFlexItem>
          <PDivider className="divider" />
        </PFlexItem>
        <PFlexItem>
          {/*To illustrate the mock procedure during the tests the selected value is displayed in the headline */}
          <PHeadline variant="headline-4">{select}</PHeadline>
          <form>
            <PSelectWrapper>
              <select data-testid="select" value={select} onChange={handleSelect}>
                <option value="Headline A">A</option>
                <option value="Headline B">B</option>
                <option value="Headline C">C</option>
              </select>
            </PSelectWrapper>
          </form>
        </PFlexItem>
        <PFlexItem>
          <PDivider className="divider" />
        </PFlexItem>
        <PFlexItem>
          {/*Checking the Checkbox makes the headline appear*/}
          {checkBox ? <PHeadline variant="headline-4">Checkbox Works</PHeadline> : ''}
          <PCheckboxWrapper label="Some label" hideLabel={false}>
            <input data-testid="checkbox" type="checkbox" name="TestBox" onInput={handleCheckBox} />
          </PCheckboxWrapper>
        </PFlexItem>
        <PFlexItem className="contentWrapperSmall">
          {/* Clicking the Radiobutton makes the headline appear*/}
          {radioButton ? <PHeadline variant="headline-4">Radio Works</PHeadline> : ''}
          <PRadioButtonWrapper label="Some label" hideLabel={false}>
            <input data-testid="radiobutton" type="radio" name="RadioButton" onInput={handleRadioButton} />
          </PRadioButtonWrapper>
        </PFlexItem>
        <PFlexItem>
          <PDivider className="divider" />
        </PFlexItem>
        <PFlexItem>
          <form>
            <PTextareaWrapper label="Test TextArea" hideLabel={false}>
              <textarea name="Testarea"></textarea>
            </PTextareaWrapper>
          </form>
        </PFlexItem>
        <PFlexItem className="contentWrapperSmall">
          {/*The headline changes according to the text field input*/}
          <PHeadline variant="headline-4">{textField}</PHeadline>
          <PTextFieldWrapper label="Test TextField" hideLabel={false}>
            <input data-testid="input" type="text" name="Textfield" onChange={handleTextField} />
          </PTextFieldWrapper>
        </PFlexItem>
        <PFlexItem className="contentWrapperSmall">
          <form>
            <PFlex>
              <PFlexItem>
                <PTextFieldWrapper>
                  {/*Example of slotted links*/}
                  <span slot="label">
                    Some label with a{' '}
                    <a data-testid="slottedHref" href="https://designsystem.porsche.com">
                      Slotted Link
                    </a>
                    .
                  </span>
                  <input
                    data-testid="slottedInput"
                    type="text"
                    aria-invalid={true}
                    name="some-name"
                    onChange={handleTextField}
                  />
                </PTextFieldWrapper>
              </PFlexItem>
            </PFlex>
          </form>
        </PFlexItem>
      </PFlex>
    </div>
  );
};

export default FormsPage;
