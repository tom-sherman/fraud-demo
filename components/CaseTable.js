import { Table } from 'antd'
import { Case } from './Case'
import { withRouter } from 'next/router'

const CTable = ({ cases, actionRender, router, possibleDecisions = [] }) => (
  <Table
    dataSource={cases.map(c => ({ ...c, key: String(c.id) }))}
    defaultExpandedRowKeys={[router.query.id]}
    columns={[
      {
        title: 'ID',
        dataIndex: 'id',
        width: 100,
        sorter: (a, b) => a.id - b.id
      },
      {
        title: 'Account',
        dataIndex: 'accountId'
      },
      {
        title: 'Transactions',
        dataIndex: 'transactions',
        key: 'transactions',
        render: transactions => transactions.length,
        sorter: (a, b) => a.transactions.length - b.transactions.length
      },
      {
        title: 'Flag Date',
        dataIndex: 'flagDate',
        render: date => date.format('YYYY-MM-DD'),
        sorter: (a, b) =>
          a.flagDate.isBefore(b.flagDate)
            ? 1
            : a.flagDate.isSame(b.flagDate)
            ? 0
            : -1
      },
      {
        title: 'Decision',
        dataIndex: 'decision',
        filters: possibleDecisions.map(decision => ({
          text: decision,
          value: decision
        })),
        onFilter: (value, record) => record.decision === value
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
