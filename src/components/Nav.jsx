import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

import 'antd/lib/menu/style/css'
import 'antd/lib/icon/style/css'
import 'antd/lib/button/style/css'


const { SubMenu } = Menu;

function Nav() {
  return (
    <div className="nav-wrapper">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1">
          <Link to="/establish">
            <Icon type="pie-chart" />
            <span>添加新闻</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/alter">
            <Icon type="desktop" />
            <span>修改新闻</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/delete">
            <Icon type="inbox" />
            <span>删除新闻</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>查询新闻</span>
            </span>
          }
        >
          <Menu.Item key="9">新闻分类</Menu.Item>
          <Menu.Item key="10">新闻名称</Menu.Item>
          <Menu.Item key="11">发文作者</Menu.Item>
          <Menu.Item key="12">其他工具</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>用户查询</span>
            </span>
          }
        >
          <Menu.Item key="5">查询姓名</Menu.Item>
          <Menu.Item key="6">查询邮箱</Menu.Item>
          <Menu.Item key="7">查询点赞</Menu.Item>
          <Menu.Item key="8">用户信息查询</Menu.Item>
        </SubMenu>
      </Menu>
      <style>
        {`
          .nav-wrapper{
            width: 256px;
            height: 100%;
            padding: 30px 0;
            display: flex;
            flex-direction: column;
            box-shadow:0 3px 4px #e6e6e6;            
          }
        `}
      </style>
    </div>
  );
}

export default Nav