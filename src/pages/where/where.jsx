/* eslint-disable react/prop-types */

import { animated } from '@react-spring/web';
import styled from 'styled-components';
import Planet from '@/assets/images/svg/mars.svg';
import './index.css';
const StyledTitle = styled.div`
  font-size: 48px;
  top: 20%;
  position: absolute;
`;
const StyledText = styled.div`
  font-size: 28px;
  margin-top: 25%;
`;
const StyledText2 = styled.div`
  font-size: 22px;
  margin-top: 3%;
`;
const Mars = styled.img`
  margin-top: 40%;
  width: 200px;
  animation: rotate 120s linear infinite;
`;
const Where = ({ style }) => {
  return (
    <animated.div className="page lightblue" style={style}>
      <StyledTitle>어디서</StyledTitle>
      <Mars src={Planet} alt="Mars" className="planet" />
      <StyledText>매주 평일 19시 봉천역</StyledText>
      <StyledText2>서울특별시 관악구 봉천로 407 4층</StyledText2>
    </animated.div>
  );
};

export default Where;
