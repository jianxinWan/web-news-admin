import React from 'react';

import { Input, Select, Button } from 'antd'
import Editor from '../../components/editor'
import Search from '../../components/searchNews'

import 'antd/lib/input/style'
import 'antd/lib/select/style'

const { Option } = Select;


const optionList = {
  fan: '娱乐',
  funny: '高效',
  military: '军事',
  sport: '运动',
  tech: '科技'
}

function Establish() {
  return (
    <div className="editor-wrapper">
      <Search />
      <Input size="large" placeholder="请输入新闻的标题" />
      <div className="editor">
        <Editor editorFn={(val) => console.log(val)} />
      </div>
      <div className="bottom-form">
        <Select
          showSearch
          size="large"
          style={{ width: 300 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(val)=>console.log(val)}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {Object.keys(optionList).map((item, index) => {
            return (
              <Option value={item} key={index}>{optionList[item]}</Option>
            )
          })}
        </Select>
        <Input size="large" placeholder="来源" />
        <Button size="large" type="primary">确定修改</Button>
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
        `}
      </style>
    </div>
  )

}

export default Establish
