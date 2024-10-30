// src/components/ScrollComponent.js
import React from 'react';
import downArrow from '@/assets/images/svg/down.svg';
// Ease in-out quad easing function
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

const ScrollComponent = () => {
  const scrollToNextScreen = (duration) => {
    const start = window.scrollY; // 현재 스크롤 위치
    const end = window.innerHeight; // 이동할 위치
    const change = end - start; // 변화량
    const increment = 20; // 프레임 당 변화량

    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      // easing 함수를 통해 스크롤 위치 계산
      const val = easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  return <img src={downArrow} onClick={() => scrollToNextScreen(1500)}></img>;
};

export default ScrollComponent;
