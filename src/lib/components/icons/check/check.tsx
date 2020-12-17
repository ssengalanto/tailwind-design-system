import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

export const Check: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 515.556 515.556" {...props}>
    <path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z" />
  </SvgIcon>
);

export default React.memo(Check);
