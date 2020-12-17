import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

export const ChevronUp: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
  </SvgIcon>
);

export default React.memo(ChevronUp);
