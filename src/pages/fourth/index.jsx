import { useEffect } from 'react';
import doubleTop from '@/assets/images/svg/doubleTop.svg';
import topArrow from '@/assets/images/svg/top.svg';
import iconInsta from '@/assets/images/svg/icon-insta.svg';
import iconYoutube from '@/assets/images/svg/icon-youtube.svg';
import iconGit from '@/assets/images/svg/icon-github.svg';

import './index.css';

const FourthScreen = () => {
  const scrollToNextScreen = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToUpScreen = () => {
    window.scrollTo({
      top: window.innerHeight * 2, // 두 번째 화면으로 이동
      behavior: 'smooth',
    });
  };

  return (
    <div className="fourth-screen-container">
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <div className="hidden">
            <h1 className="start_point">마스외전 1기</h1>
            <h2>Member</h2>
            <p>이명석</p>
            <p>이현호</p>
            <p>이우호</p>
            <p>이재협</p>
            <p>이민연</p>
            <h2>Activity History</h2>
            <p>P+ 프로젝트</p>
            <p>LG U+ Golf 이벤트 페이지</p>
            <p>LG U+ 유삐펜</p>
          </div>
          <div className="hidden">
            <h1 className="start_point">마스외전 2기</h1>
            <h2>Member</h2>
            <p>김한수</p>
            <p>김만규</p>
            <p>김범기</p>
            <p>권이나</p>
            <p>최선파</p>
            <h2>Activity History</h2>
            <p>P+ 프로젝트</p>
            <p>LG U+ Golf 이벤트 페이지</p>
            <p>LG U+ 유삐펜</p>
            <p>호그와트 심리테스트</p>
            <p>나만의 문제집 FLIP</p>
          </div>
          <div className="hidden">
            <h1 className="start_point">마스외전 3기</h1>
            <h2>Member</h2>
            <p>이가인</p>
            <p>이화진</p>
            <p>고희주</p>
            <p>이순종</p>
            <p>김규식</p>
            <p>김건우</p>
            <h2>Activity History</h2>
            <p>Todo 프로젝트</p>
            <p>Uncover 프로젝트</p>
            <p>워니토퍼 프로젝트</p>
            <p>대결 프로젝트</p>
            <p>4기 모집 사이트</p>
          </div>
          <div className="hidden">
            <h1 className="start_point">마스외전 4기</h1>
            <h2>Member</h2>
            <p>김인후</p>
            <p>김예린</p>
            <p>김채린</p>
            <p>나강민</p>
            <p>서규민</p>
            <p>박보민</p>
            <h2>Activity History</h2>
            <p>Bucket 프로젝트</p>
            <p>기술 세션 발표</p>
            <p>5기 모집 사이트</p>
          </div>
          <div className="hidden">
            <h1 className="start_point">마스외전 5기</h1>
            <h2>Member</h2>
            <p>이세진</p>
            <p>이영현</p>
            <p>백예나</p>
            <p>한민규</p>
            <p>임동현</p>
            <p>박지민</p>
            <h2></h2>
            <h2>Activity History</h2>
            <p>의견 공유 및 회고 어플리케이션 CO:MIT</p>
            <p>프로젝트 매칭 플랫폼 Hoit</p>
            <p>6기 모집 사이트</p>
          </div>

          <div className="end_copyright">
            <h2>MARS_SEQUEL</h2>
            <p>ⓒ 2024.Mars _sequel all rights Reserved</p>
            <div className="social-icons stop_point">
              <a target="_blank" href="https://www.instagram.com/mars_sequel/">
                <img
                  className="insta"
                  loading="lazy"
                  src={iconInsta}
                  alt="Instagram 아이콘"
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@user-cq4je6tb7b"
              >
                <img
                  className="youtube"
                  loading="lazy"
                  src={iconYoutube}
                  alt="YouTube 아이콘"
                />
              </a>
              <a target="_blank" href="https://github.com/MARS-crew">
                <img
                  className="github"
                  loading="lazy"
                  src={iconGit}
                  alt="GitHub 아이콘"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={doubleTop}
        alt="Down Arrow"
        className="down-arrow"
        onClick={scrollToNextScreen}
      />
      <img
        src={topArrow}
        alt="Top Arrow"
        className="top-arrow"
        onClick={scrollToUpScreen}
      />
    </div>
  );
};

export default FourthScreen;
