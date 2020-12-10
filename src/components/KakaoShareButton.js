import React, { useEffect } from 'react';
const KakaoShareButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    createKakaoButton();
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const createKakaoButton = () => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '타이틀',
        description: '#리액트 #카카오 #공유버튼',
        imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      social: {
        likeCount: 77,
        commentCount: 55,
        sharedCount: 333,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id="kakao-link-btn">
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShareButton;
