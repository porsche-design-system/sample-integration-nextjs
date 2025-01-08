import { style } from '@vanilla-extract/css';
import { getHoverStyle, getFocusStyle } from '@porsche-design-system/components-react/styles/vanilla-extract';

export const buttonStyle = style({
  backgroundColor: 'white',
  ...getFocusStyle(),
  ...getHoverStyle(),
});
