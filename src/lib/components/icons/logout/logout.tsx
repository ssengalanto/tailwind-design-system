import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

const Search: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M14.29 5.32336L11 0.656691C10.8216 0.405171 10.5508 0.234524 10.2469 0.182055C9.94306 0.129586 9.63077 0.199564 9.37834 0.376691C9.25216 0.465108 9.14474 0.577642 9.06229 0.707797C8.97984 0.837952 8.92399 0.983149 8.89795 1.13501C8.87192 1.28686 8.87622 1.44237 8.91062 1.59256C8.94501 1.74274 9.00881 1.88463 9.09834 2.01002L11.105 4.83336H1.66667C1.35725 4.83336 1.0605 4.95627 0.841709 5.17507C0.622917 5.39386 0.5 5.69061 0.5 6.00003C0.5 6.30944 0.622917 6.60619 0.841709 6.82498C1.0605 7.04378 1.35725 7.16669 1.66667 7.16669H11L8.9 9.96669C8.80808 10.0893 8.74119 10.2287 8.70317 10.3771C8.66514 10.5256 8.65673 10.68 8.67839 10.8317C8.70006 10.9834 8.75139 11.1293 8.82945 11.2611C8.90751 11.3929 9.01077 11.5081 9.13333 11.6C9.33528 11.7515 9.5809 11.8334 9.83333 11.8334C10.0145 11.8334 10.1931 11.7912 10.3551 11.7102C10.5171 11.6292 10.658 11.5116 10.7667 11.3667L14.2667 6.70003C14.4161 6.5027 14.4989 6.26298 14.5031 6.0155C14.5073 5.76803 14.4326 5.52563 14.29 5.32336Z" />
  </SvgIcon>
);

export default React.memo(Search);
