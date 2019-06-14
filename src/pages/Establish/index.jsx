import React, { useState } from 'react';
import axios from 'axios';
import { Input, Select, Button, notification } from 'antd'
import Editor from '../../components/editor'
import 'antd/lib/notification/style'
import 'antd/lib/input/style'
import 'antd/lib/select/style'

const { Option } = Select;

function getDate() {
  const myDate = new Date();
  myDate.getYear();        //获取当前年份(2位)  
  myDate.getFullYear();    //获取完整的年份(4位,1970-????)  
  myDate.getMonth();       //获取当前月份(0-11,0代表`1月)  
  myDate.getDate();        //获取当前日(1-31)  
  myDate.getDay();         //获取当前星期X(0-6,0代表星期天)  
  myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)  
  myDate.getHours();       //获取当前小时数(0-23)  
  myDate.getMinutes();     //获取当前分钟数(0-59)  
  myDate.getSeconds();     //获取当前秒数(0-59)  
  myDate.getMilliseconds();    //获取当前毫秒数(0-999)  
  myDate.toLocaleDateString();     //获取当前日期 
  return myDate.toLocaleTimeString(); //获取日期与时间  
}

function submitInfo(title, htmlContent, type, source) {
  console.log(title, htmlContent, type, source)
  axios.post('http://118.89.221.170:9004/api/news/news-add/', {
    datetime: getDate(),
    introduction: 'html',
    resource: source,
    title: title,
    type: type
  })
    .then(function (response) {
      notification.success({
        message: '添加成功',
        description:
          '新闻发布成功，去首页查看你添加的内容吧',
      });
    })
    .catch(function (error) {
      notification.fail({
        message: '添加失败',
        description:
          '添加失败，请稍后再试！',
      });
    });
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
