import styled from '@emotion/styled';

import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 48px auto;
  align-items: center;
`;

export const Title = styled.div<{ fill: 'true' | 'false' }>`
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 28px;
  border-bottom: 1.5px solid ${({ theme }) => theme.color.gray20};
  background: none;
  color: ${({ theme }) => theme.color.black100};
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 17px;
    padding-bottom: 6px;
    margin-bottom: 18px;
  }
`;
