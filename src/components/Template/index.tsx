import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'

const { Header, Sider, Content } = Layout

export type propsLayout = {
  children: React.ReactNode
}
//todo, stylizar com styled componets

const LayoutDashboard = ({ children }: propsLayout) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={true}>
        <div className="logo" />
        <Menu
          style={{ height: '100vh' }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <span>Tickets</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}></Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutDashboard
