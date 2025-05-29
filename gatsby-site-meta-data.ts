export default {
  /**
   * basic Information
   */
  title: `stark.com`,
  description: `개발자 Stark`,
  language: `ko`,
  siteUrl: `https://stark.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `wlsdks/stark-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `최진안`,
    nickname: `Stark`,
    stack: ['아키텍처', 'Spring', '설계'],
    bio: {
      email: `dig04059@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Electronic Convergence Engineering (2016.03-2022.02)',
    },
    social: {
      github: `https://github.com/wlsdks`,
      linkedIn: `https://www.linkedin.com/in/writedev/`,
      notion: `https://www.notion.so/jinanwiki/WIKI-0e3baacbd4614f2182e9c7a0f464ccc1?pvs=4`,
    },
    dropdown: {
      tistory: 'https://curiousjinan.tistory.com/',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: '스프링',
      category: 'featured-category1',
    },
    {
      title: '아키텍처',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2024.06.10 - ING',
      en: 'Hunet',
      kr: '휴넷',
      info: '러닝메이커 솔루션팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2024.04.02 - 2024.05.31',
      en: 'dk-techin',
      kr: '디케이테크인',
      info: '봇사업팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2022.04.18 - 2023.10.31',
      en: 'SweetK.',
      kr: '스위트케이',
      info: '개발1팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2024.06.01 - ING',
      en: 'Pulse',
      kr: '펄스',
      info: '팀 프로젝트',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.05.01 - 2024.02.01',
      en: 'recipia',
      kr: '레시피아',
      info: '팀 프로젝트',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
