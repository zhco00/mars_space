import downArrow from '@/assets/images/svg/down.svg';
import topArrow from '@/assets/images/svg/top.svg';
import Carousel from '@/components/Carousel';
import './index.css';

const ThirdScreen = () => {
  const scrollToNextScreen = () => {
    window.scrollTo({
      top: window.innerHeight * 3,
      behavior: 'smooth',
    });
  };

  const scrollToUpScreen = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="third-screen-container">
      <div className="text-container">
        <h1>마스외전에서 같이 놀아볼래?</h1>
        <p>1기부터 현재 5기, 깍두기들과 함께 진행한 5년의 기록물이야.</p>
      </div>
      <Carousel />
      <img
        src={downArrow}
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

export default ThirdScreen;
