import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

export const ChevronDown: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  </SvgIcon>
);

export default React.memo(ChevronDown);
