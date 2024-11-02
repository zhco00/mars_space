import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate로 변경
import logo from '@/assets/images/logo.png';
import Planet from '@/assets/images/svg/mars.svg';
import astronaut from '@/assets/images/svg/astronaut.svg';
import downArrow from '@/assets/images/svg/down.svg'; // 다운 화살표 이미지 임포트
import './index.css'; // CSS 파일 추가

const FirstScreen = () => {
  const navigate = useNavigate(); // navigate 객체 가져오기
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveAstronaut = () => {
      const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
      const randomLeft = Math.floor(Math.random() * (window.innerWidth - 50));
      setPosition({
        top: randomTop,
        left: randomLeft,
      });
    };
    moveAstronaut();
    const interval = setInterval(moveAstronaut, 3000);
    return () => clearInterval(interval);
  }, []);

  // 아래 페이지로 스크롤하는 함수
  const scrollToNextScreen = () => {
    window.scrollTo({
      top: window.innerHeight, // 첫 번째 화면의 높이만큼 스크롤
      behavior: 'smooth', // 부드럽게 스크롤
    });
  };

  // 지원 하러가기 클릭 시 apply.jsx로 이동
  const handleApplyClick = () => {
    navigate('/apply'); // /apply로 이동
  };

  return (
    <div className="first-screen-container">
      <div className="background" />
      <img src={logo} alt="Logo" className="logo" />
      <div className="add" onClick={handleApplyClick}>
        지원 하러가기
      </div>
      <div className="text-container">
        <p>안녕하세요! 마스외전 입니다.</p>
        <h2>마스외전 6기를 찾고 있습니다.</h2>
      </div>
      <img src={Planet} alt="Mars" className="planet" />
      <img
        src={astronaut}
        alt="astronaut"
        className="astronaut"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      />
      <div className="vertical-line" />
      <img
        src={downArrow}
        alt="Down Arrow"
        className="down-arrow"
        onClick={scrollToNextScreen}
      />

      <footer className="footer">
        © 2024 Mars Sequel. All rights reserved.
      </footer>
    </div>
  );
};

export default FirstScreen;
