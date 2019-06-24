import React from 'react'
import { Menu, Badge, Layout } from 'antd'
import { withRouter } from 'next/router'
import Link from 'next/link'

const { Sider } = Layout

export const SideMenuItem = ({ text, href, badgeStyle, count }) => (
  <Menu.Item key={href}>
    <Link href={href}>
      <a>
        <span>{text}</span> <Badge style={badgeStyle} count={count} />
      </a>
    </Link>
  </Menu.Item>
)

export const SideMenu = withRouter(({ children, router }) => (
  <Sider style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      // The key of each menu item must be it's pathname
      defaultSelectedKeys={[router.pathname]}
      style={{ height: '100%', borderRight: 0 }}
    >
      {children}
    </Menu>
  </Sider>
))
