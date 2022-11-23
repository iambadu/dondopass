/* eslint-disable import/prefer-default-export */

import styled from '@emotion/styled';

export enum OnMobileEnum {
  SHOW = 'SHOW',
  HIDE = 'HIDE',
  ONLY_MOBILE = 'ONLY_MOBILE',
}
type Props = {
  status: OnMobileEnum;
};
export const OnMobile = styled.div<Props>`
  @media (min-width: 768px) {
    display: ${({ status }) => (status === OnMobileEnum.ONLY_MOBILE ? 'none' : 'block')};
  }
  @media (max-width: 768px) {
    display: ${({ status }) => (status === OnMobileEnum.HIDE ? 'none' : 'unset')};
  }
`;
