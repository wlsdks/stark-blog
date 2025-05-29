import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { MOBILE_MEDIA_QUERY } from '@/src/styles/const';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const PostCard = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 14px;
  border: 1.5px solid ${({ theme }) => theme.color.gray20};
  padding: 12px 18px;
  gap: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: translateY(0);
  
  &:hover {
    background-color: ${({ theme }) => theme.color.gray10};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }

  @media ${MOBILE_MEDIA_QUERY} {
    padding: 8px;
    gap: 8px;
  }
`;

export const Emoji = styled.div`
  font-size: 30px;
  background: ${({ theme }) => theme.color.gray10};
  border-radius: 50%;
  width: 50px;
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 24px;
    width: 40px;
    min-width: 40px;
    height: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.color.black100};
  margin-bottom: 4px;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

export const Date = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.color.gray60};
  font-family: GmarketSansLight;
  @media ${MOBILE_MEDIA_QUERY} {
    font-size: 9px;
  }
`;
