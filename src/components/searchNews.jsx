import React, { useState } from 'react';
import { Input, Button, notification } from 'antd'
import axios from 'axios';
import 'antd/lib/notification/style'
import 'antd/lib/input/style'

function searchInfo(searchKey, search) {
  axios.post('http://118.89.221.170:9004/api/news/news/search-list', {
    titleName: searchKey
  })
    .then(function (res) {
      const { data } = res
      const { message } = data
      if (message === 'success') {
        console.log(data.data)
        search(data.data)
        notification.success({
          message: '查询成功！',
          description:
            ''
        });
      }
    })
    .catch(function (e) {
    });
}


function Header(info) {
  const { search } = info
  const [title, setTitle] = useState('')
  return (
    <div className="search-wrapper">
      <Input size="large" placeholder="根据id查询文章" onChange={(e) => setTitle(e.target.value)} />
      <Button size="large" icon="search" onClick={() => searchInfo(title, search)}>Search</Button>
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
