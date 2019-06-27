import React from 'react'
import { Layout, Menu, Badge, Icon } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useAppState } from '../components/AppContext'
import { filterRefer, filterFraud, filterGenuine } from '../util'

const { Header, Content, Sider } = Layout

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 829.15 337.32"
    style={{ width: '2em', marginRight: '1em' }}
  >
    <defs />
    <polygon
      fill="#fff"
      points="720.66 0 682.28 113.49 151.05 113.49 112.66 0 0 0 74.92 213.69 352.76 213.69 414.58 337.32 476.39 213.69 754.18 213.69 829.15 0 720.66 0"
    />
  </svg>
)

export const App = withRouter(({ router, children }) => {
  const [{ cases }] = useAppState()

  return (
    <Layout>
      <Header className="header">
        <style jsx>{`
          h1 {
            color: white;
            display: inline-block;
          }
        `}</style>
        <Logo />
        <h1>Rainbird Fraud Detection</h1>
      </Header>
      <Layout className="ant-layout-has-sider">
        <Sider style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            // The key of each menu item must be it's pathname
            selectedKeys={[router.pathname]}
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
