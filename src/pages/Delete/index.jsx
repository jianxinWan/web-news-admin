import React, { useState } from 'react';
import { Table, Divider, Tag } from 'antd';
import Search from '../../components/searchNews';
import 'antd/lib/table/style'
import 'antd/lib/divider/style'
import 'antd/lib/tag/style'

const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


function Delete() {
  const [newsList, setNewsList] = useState([])
  console.log(newsList)
  return (
    <div className="editor-wrapper">
      <Search search={(res) => setNewsList(res)} />
      <div className="bottom-table">
        <Table dataSource={data}>
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                Invite
              <Divider type="vertical" />
                Delete
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
