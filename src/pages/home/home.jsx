// src/pages/Home.js
import React from 'react';
import FirstScreen from '@/pages/first'; // FirstScreen 컴포넌트 임포트
import SecondScreen from '@/pages/second'; // SecondScreen 컴포넌트 임포트
import ThirdScreen from '@/pages/third';
import FourthScreen from '@/pages/fourth';
import './Home.css'; // Home 스타일 시트

const Home = () => {
  return (
    <div className="home-container">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
    </div>
  );
};

export default Home;
