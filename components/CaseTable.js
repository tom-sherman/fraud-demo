import { Table } from 'antd'
import { Case } from './Case'

export const CaseTable = ({ cases, actionRender }) => (
  <Table
    dataSource={cases.map(c => ({ ...c, key: c.id }))}
    columns={[
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
