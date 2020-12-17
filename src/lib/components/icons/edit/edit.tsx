import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

export const Edit: React.FC<SvgIconProps> = (props) => (
  <SvgIcon viewBox="0 0 469.333 469.333" {...props}>
    <rect x="21.333" y="426.667" width="426.667" height="42.667" />
    <path
      d="M327.253,0L64,263.253V384h120.747L448,120.747L327.253,0z M167.04,341.333h-60.373V280.96L327.253,60.373l60.373,60.373
			L167.04,341.333z"
    />
  </SvgIcon>
);

export default React.memo(Edit);
