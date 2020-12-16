import React from 'react';
import { SvgIcon, SvgIconProps } from 'lib/components/common';

export const Logout: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M8.16699 7.00008C8.47641 7.00008 8.77316 6.87716 8.99195 6.65837C9.21074 6.43958 9.33366 6.14283 9.33366 5.83341C9.33366 5.524 9.21074 5.22725 8.99195 5.00846C8.77316 4.78966 8.47641 4.66675 8.16699 4.66675H5.83366C5.52424 4.66675 5.22749 4.78966 5.0087 5.00846C4.78991 5.22725 4.66699 5.524 4.66699 5.83341V22.1667C4.66699 22.4762 4.78991 22.7729 5.0087 22.9917C5.22749 23.2105 5.52424 23.3334 5.83366 23.3334H8.16699C8.47641 23.3334 8.77316 23.2105 8.99195 22.9917C9.21074 22.7729 9.33366 22.4762 9.33366 22.1667C9.33366 21.8573 9.21074 21.5606 8.99195 21.3418C8.77316 21.123 8.47641 21.0001 8.16699 21.0001H7.00033V7.00008H8.16699Z" />
    <path d="M24.29 13.3234L21 8.65669C20.8216 8.40517 20.5508 8.23452 20.2469 8.18205C19.9431 8.12959 19.6308 8.19956 19.3783 8.37669C19.2522 8.46511 19.1447 8.57764 19.0623 8.7078C18.9798 8.83795 18.924 8.98315 18.898 9.13501C18.8719 9.28686 18.8762 9.44237 18.9106 9.59256C18.945 9.74274 19.0088 9.88463 19.0983 10.01L21.105 12.8334H11.6667C11.3572 12.8334 11.0605 12.9563 10.8417 13.1751C10.6229 13.3939 10.5 13.6906 10.5 14C10.5 14.3094 10.6229 14.6062 10.8417 14.825C11.0605 15.0438 11.3572 15.1667 11.6667 15.1667H21L18.9 17.9667C18.8081 18.0893 18.7412 18.2287 18.7032 18.3771C18.6651 18.5256 18.6567 18.68 18.6784 18.8317C18.7001 18.9834 18.7514 19.1293 18.8294 19.2611C18.9075 19.3929 19.0108 19.5081 19.1333 19.6C19.3353 19.7515 19.5809 19.8334 19.8333 19.8334C20.0145 19.8334 20.1931 19.7912 20.3551 19.7102C20.5171 19.6292 20.658 19.5116 20.7667 19.3667L24.2667 14.7C24.4161 14.5027 24.4989 14.263 24.5031 14.0155C24.5073 13.768 24.4326 13.5256 24.29 13.3234Z" />
  </SvgIcon>
);

export default React.memo(Logout);
