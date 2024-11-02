/* eslint-disable react/prop-types */

import { animated } from '@react-spring/web';
import styled from 'styled-components';
import Planet from '@/assets/images/svg/mars.svg';
const StyledTitle = styled.div`
  font-size: 48px;
  top: 20%;
  position: absolute;
`;

const StyledText2 = styled.div`
  font-size: 20px;
  margin-top: 3%;
  padding: 5%;
`;
const Mars = styled.img`
  margin-top: 40%;
  width: 200px;
  animation: rotate 120s linear infinite;
`;
const What = ({ style }) => {
  return (
    <animated.div className="page lightblue" style={style}>
      <StyledTitle>무엇을 할까?</StyledTitle>
      <Mars src={Planet} alt="Mars" className="planet" />

      <StyledText2>
        외주 개발을 통한 실무 경험과 개인 또는 팀을 구성하여 서비스를 기획부터
        개발까지 완성하며 개인의 역량을 향상시킬 수 있으며, 학교에서는 학습하지
        못하였던 공부를 함께 배우며 성장중!
      </StyledText2>
    </animated.div>
  );
};

export default What;
