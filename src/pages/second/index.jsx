import downArrow from '@/assets/images/svg/down.svg';
import topArrow from '@/assets/images/svg/top.svg';
import Carousel from '@/components/Carousel';
import './index.css';

const SecondScreen = () => {
  const scrollToNextScreen = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: 'smooth',
    });
  };

  const scrollToUpScreen = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="second-screen-container">
      <img
        src={topArrow}
        alt="Top Arrow"
        className="top-arrow"
        onClick={scrollToUpScreen}
      />
      <img
        src={downArrow}
        alt="Down Arrow"
        className="down-arrow"
        onClick={scrollToNextScreen}
      />
    </div>
  );
};

export default SecondScreen;
