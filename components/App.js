import React from 'react'
import { Layout, Menu, Badge, Icon, Divider } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useAppState } from '../components/AppContext'
import { filterRefer, filterFraud, filterGenuine } from '../util'

const { Header, Content, Sider } = Layout

export const App = withRouter(({ router, children }) => {
  const [{ cases }] = useAppState()

  return (
    <Layout>
      <Header className="header">
        <style jsx>{`
          h1 {
            color: white;
          }
        `}</style>
        <div className="logo" />
        <h1>Rainbird Fraud Detection</h1>
      </Header>
      <Layout className="ant-layout-has-sider">
        <Sider style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            // The key of each menu item must be it's pathname
            defaultSelectedKeys={[router.pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <style jsx>{`
              .space-between {
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            `}</style>
            <Menu.Item key="/">
              <Link href="/">
                <a>
                  <Icon type="home" />
                  Home
                </a>
              </Link>
            </Menu.Item>
            {/* <Divider /> */}
            <Menu.Item key="/validate">
              <Link href="/validate">
                <a className="space-between">
                  <span>Validate</span>{' '}
                  <Badge count={cases.filter(filterRefer).length} />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/fraud">
              <Link href="/fraud">
                <a className="space-between">
                  <span>Fraud</span>{' '}
                  <Badge
                    style={{
                      backgroundColor: '#fff',
                      color: '#999',
                      boxShadow: '0 0 0 1px #d9d9d9 inset'
                    }}
                    count={cases.filter(filterFraud).length}
                  />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/genuine">
              <Link href="/genuine">
                <a className="space-between">
                  <span>Genuine</span>{' '}
                  <Badge
                    style={{
                      backgroundColor: '#fff',
                      color: '#999',
                      boxShadow: '0 0 0 1px #d9d9d9 inset'
                    }}
                    count={cases.filter(filterGenuine).length}
                  />
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 1000,
              marginTop: 20
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
})
