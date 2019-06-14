import React, { useState } from 'react';
import { Table, Divider, notification } from 'antd';
import axios from 'axios'
import Search from '../../components/searchNews';
import 'antd/lib/table/style'
import 'antd/lib/divider/style'
import 'antd/lib/tag/style'
import 'antd/lib/notification/style'

const { Column } = Table;

function deleteFn(record, newsList, setNewsList) {
  axios.post('http://118.89.221.170:9004/api/news/news/delete', {
    id: record.filterId,
    type: record.filterType
  })
    .then(function (res) {
      const { data } = res
      const { message } = data
      if (message === 'success') {
        notification.success({
          message: '删除成功',
          description:
            ''
        });
        setNewsList([...newsList.slice(0, newsList.indexOf(record)), ...newsList.slice(newsList.indexOf(record) + 1)])
      }
    })
    .catch(function (e) {
    });
}

function Delete() {
  const [newsList, setNewsList] = useState([])
  return (
    <div className="editor-wrapper">
      <Search search={(res) => setNewsList(res)} />
      <div className="bottom-table">
        <Table dataSource={newsList}>
          <Column title="filterName" dataIndex="filterName" key="filterName" />
          <Column title="filterType" dataIndex="filterType" key="filterType" />
          <Column title="filterId" dataIndex="filterId" key="filterId" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                Invite
              <Divider type="vertical" />
                <span onClick={() => deleteFn(text, newsList, setNewsList)}>Delete</span>
              </span>
            )}
          />
        </Table>

      </div>
      <style>
        {`
        .editor-wrapper{
          width: 100%;
          height: 100%;
          overflow-y: scroll;
        }
        .editor{
          height: 600px;
          margin: 0 30px;
          border: 1px solid #999999;
        }
        .bottom-form{
          display: flex;
          align-items: center;
          margin: 10px 30px;
        }
        .ant-input {
          width: calc(100% - 60px);
          margin: 10px 30px;
        }
        .bottom-table{
          margin: 30px;
        }
        `}
      </style>
    </div>
  )

}

export default Delete
