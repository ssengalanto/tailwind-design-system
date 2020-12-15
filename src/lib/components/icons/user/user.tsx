import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

const User: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M16.3286 12.8283C17.4724 11.9284 18.3072 10.6944 18.717 9.29792C19.1268 7.90144 19.0911 6.41196 18.615 5.0367C18.1388 3.66143 17.2459 2.46877 16.0603 1.62465C14.8748 0.780522 13.4556 0.326904 12.0002 0.326904C10.5449 0.326904 9.12571 0.780522 7.94016 1.62465C6.75461 2.46877 5.86164 3.66143 5.38549 5.0367C4.90933 6.41196 4.87367 7.90144 5.28346 9.29792C5.69325 10.6944 6.52812 11.9284 7.67191 12.8283C5.712 13.6135 4.00191 14.9159 2.72395 16.5966C1.44599 18.2772 0.648064 20.2732 0.41524 22.3717C0.398387 22.5249 0.411876 22.6799 0.454937 22.8279C0.497997 22.9759 0.569786 23.1139 0.666204 23.2342C0.860929 23.4771 1.14415 23.6326 1.45357 23.6667C1.76299 23.7007 2.07326 23.6104 2.31612 23.4157C2.55898 23.221 2.71454 22.9377 2.74857 22.6283C3.00476 20.3477 4.09221 18.2414 5.80316 16.7119C7.51412 15.1824 9.72862 14.3369 12.0236 14.3369C14.3185 14.3369 16.533 15.1824 18.244 16.7119C19.9549 18.2414 21.0424 20.3477 21.2986 22.6283C21.3303 22.915 21.4671 23.1798 21.6825 23.3715C21.898 23.5633 22.1768 23.6684 22.4652 23.6667H22.5936C22.8994 23.6315 23.1789 23.4768 23.3712 23.2364C23.5635 22.9961 23.653 22.6894 23.6202 22.3833C23.3863 20.2789 22.5841 18.2778 21.2996 16.5946C20.015 14.9113 18.2966 13.6094 16.3286 12.8283ZM12.0002 12C11.0773 12 10.175 11.7263 9.40758 11.2135C8.64015 10.7007 8.04201 9.9719 7.6888 9.11917C7.33559 8.26645 7.24318 7.32814 7.42324 6.4229C7.60331 5.51765 8.04776 4.68613 8.70041 4.03348C9.35305 3.38084 10.1846 2.93638 11.0898 2.75632C11.9951 2.57625 12.9334 2.66867 13.7861 3.02188C14.6388 3.37509 15.3677 3.97323 15.8804 4.74066C16.3932 5.50809 16.6669 6.41034 16.6669 7.33332C16.6669 8.57099 16.1752 9.75798 15.3001 10.6332C14.4249 11.5083 13.2379 12 12.0002 12Z" />
  </SvgIcon>
);

export default React.memo(User);
