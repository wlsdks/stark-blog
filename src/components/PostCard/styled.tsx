import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { contentMaxWidth, hoverUnderline, MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  min-height: 150px;
  width: 100%;
  position: relative;
`;

export const PostCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: ${contentMaxWidth};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.gray20};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray10};
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    @media ${MOBILE_MEDIA_QUERY} {
      background-color: transparent;
      transform: none;
      box-shadow: none;
    }
  }
  @media ${MOBILE_MEDIA_QUERY} {
    &:active {
      background-color: ${({ theme }) => theme.color.gray10};
      transform: translateY(-1px);
    }
  }
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.4;
`;

export const Description = styled.p`
  font-size: 13px;
  margin-bottom: 30px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-family: GmarketSansLight;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  width: 100%;
  padding: 0 15px;
  color: ${({ theme }) => theme.color.gray60};
  font-family: GmarketSansLight;
  position: absolute;
  bottom: 24px;
`;

export const Date = styled.div``;

export const Categories = styled.div`
  display: flex;
`;

export const Category = styled(Link)`
  margin-left: 4px;
  color: ${({ theme }) => theme.color.gray60};
  ${({ theme }) => hoverUnderline(theme)};
  &:after {
    background-color: ${({ theme }) => theme.color.gray60};
  }
`;