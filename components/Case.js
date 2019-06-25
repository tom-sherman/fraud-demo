import { Descriptions, Table, Tabs } from 'antd'
import { formatDate, formatCurrency } from '../util'
import { EvidenceTree } from './EvidenceTree'

const { TabPane } = Tabs

const TransactionTable = ({ transactions }) => (
  <Table
    dataSource={transactions.map(t => ({ ...t, key: t.id }))}
    columns={[
      { title: 'Transaction ID', dataIndex: 'id' },
      {
        title: 'Amount',
        dataIndex: 'amount',
        render: amount => formatCurrency(amount)
      },
      { title: 'Location', dataIndex: 'location' },
      { title: 'Date', dataIndex: 'date' },
      { title: 'Merchant code', dataIndex: 'merchantCode' },
      { title: 'Source', dataIndex: 'source' }
    ]}
  />
)

export const Case = ({
  id,
  accountId,
  flagDate,
  transactions,
  dateCardLastIssued,
  addressLastChanged,
  postcode,
  decision
}) => (
  <Tabs defaultActiveKey="1">
    <TabPane tab={`Case#${id} info`} key="1">
      <Descriptions>
        <Descriptions.Item label="ID">Case#{id}</Descriptions.Item>
        <Descriptions.Item label="Account ID">
          Account#{accountId}
        </Descriptions.Item>
        <Descriptions.Item label="Postcode">{postcode}</Descriptions.Item>
        <Descriptions.Item label="Date card last issued">
          {formatDate(new Date(dateCardLastIssued))}
        </Descriptions.Item>
        <Descriptions.Item label="Date address last changed">
          {formatDate(new Date(addressLastChanged))}
        </Descriptions.Item>
        <Descriptions.Item label="Case flagged on">
          {formatDate(new Date(flagDate))}
        </Descriptions.Item>
      </Descriptions>
    </TabPane>
    <TabPane tab="Transactions" key="2">
      <TransactionTable transactions={transactions} />
    </TabPane>
    <TabPane tab="Rainbird decisioning" key="3">
      <EvidenceTree decision={decision} />
    </TabPane>
  </Tabs>
)
