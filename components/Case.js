import { Descriptions, Table, Tabs, Alert } from 'antd'
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
  markedAs,
  originalDecision
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
        <Descriptions.Item label="Original Rainbird decision">
          {originalDecision}
        </Descriptions.Item>
      </Descriptions>
    </TabPane>
    <TabPane tab="Transactions" key="2">
      <TransactionTable transactions={transactions} />
    </TabPane>
    <TabPane tab="Decisioning" key="3">
      <style jsx>{`
        .alert {
          display: inline-block;
          margin-bottom: 1em;
        }
      `}</style>
      {typeof markedAs !== 'undefined' ? (
        <div className="alert">
          <Alert
            message={`The user marked this case as ${markedAs.toLowerCase()}.`}
            type="info"
            showIcon
          />
        </div>
      ) : null}
      <p>Rainbird's evidence tree:</p>
      <EvidenceTree decision={originalDecision} />
    </TabPane>
  </Tabs>
)
