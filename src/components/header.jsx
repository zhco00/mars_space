import logo from '@/assets/images/logo.png';

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="로고" width="70" height="70" />
      </div>
      <div className="form">
        <a href="/">
          <button className="form_btn">
            <h2>마스외전 사이트 보러가기</h2>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
