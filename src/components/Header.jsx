import React from 'react';

function Header() {
  return (
    <div className="header-wrapper">
      <div className="center-wrapper">
        <div className="logo"></div>
        <div className="admin-name">hello admin</div>
        {/* <div className="logo-out">
          注销
          <img src="//p3.pstatp.com/origin/1749500000fad0f0c3485" alt="log-out" />
        </div> */}
      </div>
      <style>
        {`
          .header-wrapper{
            width: 100%;
            height: 50px;
            box-shadow: -3px 0 4px #e6e6e6;
            display: flex;
            justify-content: center;
          }
          .center-wrapper{
            width: 1000px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo{
            width: 100px;
            height: 100%;
            background: url('//p3.pstatp.com/origin/174920000109f45a73a0f') no-repeat;
            background-position: 0;
            background-size: auto 120%;
          }
          .admin-name{
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default Header;
