import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

const Male: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M16.9908 0.617025C16.9831 0.555979 16.9696 0.497182 16.9473 0.442017C16.9466 0.440633 16.9466 0.438731 16.9462 0.437002C16.9462 0.436656 16.9459 0.43631 16.9455 0.435964C16.921 0.377858 16.8874 0.325114 16.8495 0.276174C16.8402 0.264587 16.831 0.253174 16.8212 0.242279C16.7807 0.196625 16.7368 0.154429 16.6858 0.120015C16.6844 0.118978 16.6827 0.118632 16.6813 0.117594C16.632 0.085083 16.5775 0.0605265 16.5205 0.0411581C16.5063 0.036143 16.4924 0.0318197 16.4779 0.0280151C16.4181 0.0117594 16.3565 0 16.2917 0H11.3333C10.9423 0 10.625 0.317332 10.625 0.708333C10.625 1.09933 10.9423 1.41667 11.3333 1.41667H14.5814L10.3537 5.64436C9.22632 4.74269 7.83836 4.25 6.375 4.25C2.85996 4.25 0 7.10996 0 10.625C0 14.14 2.85996 17 6.375 17C9.89003 17 12.75 14.14 12.75 10.625C12.75 9.16233 12.2577 7.77472 11.3553 6.64633L15.5833 2.41829V5.66667C15.5833 6.05767 15.9007 6.375 16.2917 6.375C16.6827 6.375 17 6.05767 17 5.66667V0.708333C17 0.693461 16.9965 0.679281 16.9957 0.664754C16.9946 0.648499 16.9929 0.632935 16.9908 0.617025ZM6.375 15.5833C3.64076 15.5833 1.41667 13.3592 1.41667 10.625C1.41667 7.89076 3.64076 5.66667 6.375 5.66667C7.6988 5.66667 8.94513 6.18201 9.88225 7.11584C10.818 8.05487 11.3333 9.3012 11.3333 10.625C11.3333 13.3592 9.10924 15.5833 6.375 15.5833Z" />
  </SvgIcon>
);

export default React.memo(Male);
