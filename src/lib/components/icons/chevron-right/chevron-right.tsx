import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

export const ChevronRight: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
  </SvgIcon>
);

export default React.memo(ChevronRight);
