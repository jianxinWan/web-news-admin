import React, { useState } from 'react';

import { Input, Select, Button } from 'antd'
import Editor from '../../components/editor'

import 'antd/lib/input/style'
import 'antd/lib/select/style'

const { Option } = Select;

function submitInfo(title, htmlContent, type, source) {
  console.log(title, htmlContent, type, source)
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

const optionList = {
  fan: '娱乐',
  funny: '高效',
  military: '军事',
  sport: '运动',
  tech: '科技'
}

function Establish() {
  const [htmlContent, setHtmlContent] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [source, setSource] = useState('')

  return (
    <div className="editor-wrapper">
      <Input size="large" placeholder="请输入新闻的标题" onChange={(e) => setTitle(e.target.value)} />
      <div className="editor">
        <Editor editorFn={(htmlInfo) => setHtmlContent(htmlInfo)} />
      </div>
      <div className="bottom-form">
        <Select
          showSearch
          size="large"
          style={{ width: 300 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(val) => setType(val)}
        >
          {Object.keys(optionList).map((item, index) => {
            return (
              <Option value={item} key={index}>{optionList[item]}</Option>
            )
          })}
        </Select>
        <Input size="large" placeholder="来源" onChange={(e) => setSource(e.target.value)} />
        <Button size="large" type="primary" onClick={() => submitInfo(title, htmlContent, type, source)}>提交</Button>
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
