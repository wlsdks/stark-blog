import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import { Author } from '@/src/type';

import BuyMeACoffee from '../BuyMeACoffee';
import Image from '../Image';
import * as S from './styled';

type MainBannerProps = {
  author: Author;
};

const MainBanner: React.FC<MainBannerProps> = ({ author }) => {
  const { stack, social, name, nickname } = author;

  const socialOrder = ['github', 'linkedIn', 'notion', 'tistory'];

  return (
    <S.Wrapper>
      <S.IntroWrapper>
        <S.Title>
          안녕하세요! 저는
          <br />
          <strong>
            <ReactRotatingText items={stack} />
          </strong>
          <span>를 좋아하는</span>
          <br />
          백엔드 개발자{' '}
          <strong>
            <ReactRotatingText items={[name, nickname]} />
          </strong>
          입니다.
        </S.Title>
        <S.SocialWrapper>
          {socialOrder.map(
            (link) =>
              social[link as keyof typeof social] && (
                <S.SocialButton key={link} target='_blank' href={social[link as keyof typeof social]}>
                  {link}
                </S.SocialButton>
              ),
          )}
        </S.SocialWrapper>
        <Image alt='thumbnail' src='thumbnail.png' />
      </S.IntroWrapper>

      {/* <S.BuyMeACoffeeWrapper>
        <BuyMeACoffee />
      </S.BuyMeACoffeeWrapper> */}
    </S.Wrapper>
  );
};

export default MainBanner;
