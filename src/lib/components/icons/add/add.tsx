import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

const Add: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M22.7082 11.0416H13.9582V2.29158C13.9582 1.90481 13.8046 1.53388 13.5311 1.26039C13.2576 0.986898 12.8867 0.833252 12.4999 0.833252C12.1131 0.833252 11.7422 0.986898 11.4687 1.26039C11.1952 1.53388 11.0416 1.90481 11.0416 2.29158V11.0416H2.29158C1.90481 11.0416 1.53388 11.1952 1.26039 11.4687C0.986898 11.7422 0.833252 12.1131 0.833252 12.4999C0.833252 12.8867 0.986898 13.2576 1.26039 13.5311C1.53388 13.8046 1.90481 13.9582 2.29158 13.9582H11.0416V22.7082C11.0416 23.095 11.1952 23.466 11.4687 23.7394C11.7422 24.0129 12.1131 24.1666 12.4999 24.1666C12.8867 24.1666 13.2576 24.0129 13.5311 23.7394C13.8046 23.466 13.9582 23.095 13.9582 22.7082V13.9582H22.7082C23.095 13.9582 23.466 13.8046 23.7394 13.5311C24.0129 13.2576 24.1666 12.8867 24.1666 12.4999C24.1666 12.1131 24.0129 11.7422 23.7394 11.4687C23.466 11.1952 23.095 11.0416 22.7082 11.0416Z" />
  </SvgIcon>
);

export default React.memo(Add);