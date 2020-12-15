import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

const Search: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
  </SvgIcon>
);

export default React.memo(Search);
