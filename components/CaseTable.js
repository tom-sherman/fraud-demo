import { Table } from 'antd'
import { Case } from './Case'
import { withRouter } from 'next/router'

const CTable = ({ cases, actionRender, router }) => (
  <Table
    dataSource={cases.map(c => ({ ...c, key: String(c.id) }))}
    defaultExpandedRowKeys={[router.query.id]}
    columns={[
      {
        title: 'ID',
        dataIndex: 'id',
        width: 100
      },
      {
        title: 'Account',
        dataIndex: 'accountId'
      },
      {
        title: 'Transactions',
        dataIndex: 'transactions',
        key: 'transactions',
        render: transactions => transactions.length
      },
      {
        title: 'Flag Date',
        dataIndex: 'flagDate',
        render: date => date.format('YYYY-MM-DD')
      },
      {
        title: 'Decision',
        dataIndex: 'decision'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'action',
        render: actionRender
      }
    ]}
    expandedRowRender={record => <Case {...record} />}
  />
)

export const CaseTable = withRouter(CTable)
