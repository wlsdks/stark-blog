import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

const blinkingCursor = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  margin: 100px auto 60px auto;
  padding: 0;
  font-family: GmarketSansLight;
  box-sizing: border-box;

  .react-rotating-text-cursor {
    animation: ${blinkingCursor} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 0;
    margin: 60px 0 50px 0;
  }

  .gatsby-image-wrapper {
    position: absolute;
    right: 30px;
    top: -100px;
    width: 300px;
    @media ${MOBILE_MEDIA_QUERY} {
      position: absolute;
      right: 0;
      top: -20px;
      width: 100px;
    }
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  position: relative;
  font-size: 36px;
  line-height: 1.3;
  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
    gap: 18px;
    font-size: 22px;
  }
  strong {
    font-family: GmarketSansMedium;
    .react-rotating-text-cursor {
      font-family: GmarketSansLight;
      font-size: 36px;
      @media ${MOBILE_MEDIA_QUERY} {
        font-size: 22px;
      }
    }
  }
`;

export const Title = styled.p`
  width: 100%;
  margin-bottom: 0;
  text-align: left;
  .react-rotating-text-cursor {
    font-size: 36px;
    line-height: 35px;
  }
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 22px;
    .react-rotating-text-cursor {
      font-size: 22px;
      line-height: 22px;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-top: -4px;
  margin-bottom: 8px;
  @media ${MOBILE_MEDIA_QUERY} {
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    margin-top: -4px;
    margin-bottom: 6px;
  }
`;

export const SocialButton = styled.a`
  color: ${({ theme }) => theme.color.black100};
  font-size: 18px;
  background: none;
  border-radius: 0;
  padding: 2px 0;
  ${({ theme }) => hoverUnderline(theme)};
  transition: color 0.15s;
  &:hover {
    color: ${({ theme }) => theme.color.black60};
  }
`;

export const DropdownButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  margin-left: 8px;
  & > div:first-of-type {
    cursor: pointer;
    color: ${({ theme }) => theme.color.gray60};
    font-size: 16px;
    padding: 0 8px;
    &:hover {
      color: ${({ theme }) => theme.color.black100};
    }
  }
  @media ${MOBILE_MEDIA_QUERY} {
    margin-left: 0;
  }
`;

export const Dropdown = styled.div`
  margin-top: 5px;
  position: absolute;
  gap: 2px;
  display: flex;
  flex-direction: column;
  top: 36px;
  right: 0;
  align-items: flex-end;
  z-index: 30;
  @media ${MOBILE_MEDIA_QUERY} {
    left: 0px;
    align-items: flex-start;
  }
`;

export const BuyMeACoffeeWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media ${MOBILE_MEDIA_QUERY} {
    margin-top: 24px;
  }
`;
