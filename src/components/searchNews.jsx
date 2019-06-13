import React from 'react';
import { Input, Button } from 'antd'

import 'antd/lib/input/style'

function searchInfo(searchKey) {
  window
    .fetch('', {
      credentials: "include"
    })
    .then(res => res.json())
    .then(({
      message,
      data
    }) => {
    })
}


function Header() {
  return (
    <div className="search-wrapper">
      <Input size="large" placeholder="根据id查询文章" onChange={(e) => searchInfo(e.target.value)} />
      <Button size="large" icon="search">Search</Button>
      <style>
        {`
        .search-wrapper{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 30px 0 30px;
        }
        .search-wrapper .ant-input {
          margin:0 30px 0 0 !important;
        }
        `}
      </style>
    </div>
  );
}

export default Header;
