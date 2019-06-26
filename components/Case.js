import {
  Descriptions,
  Table,
  Tabs,
  Alert,
  Button,
  Icon,
  Input,
  DatePicker,
  Spin
} from 'antd'
import { renderDate, formatCurrency, analyseCase } from '../util'
import { EvidenceTree } from './EvidenceTree'
import { useState, useEffect } from 'react'
import { useAppState } from './AppContext'

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
      { title: 'Date', dataIndex: 'date', render: date => renderDate(date) },
      { title: 'Merchant code', dataIndex: 'merchantCode' },
      { title: 'Source', dataIndex: 'source' }
    ]}
  />
)

const CaseDescription = ({
  id,
  accountId,
  flagDate,
  dateCardLastIssued,
  addressLastChanged,
  postcode,
  rbDecision,
  previousPostcode,
  contactDetailsLastChanged,
  onChange = () => {},
  onAnalyse = () => {},
  onSave = () => {}
}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <div>
        <EditSaveButton
          isEditing={isEditing}
          onClick={() => {
            if (isEditing) {
              onSave()
            }
            setIsEditing(!isEditing)
          }}
        />
        <Button disabled={isEditing} onClick={onAnalyse}>
          Analyse <Icon type="reload" />
        </Button>
      </div>
      <Descriptions>
        <Descriptions.Item label="ID">Case#{id}</Descriptions.Item>
        <Descriptions.Item label="Account ID">
          Account#{accountId}
        </Descriptions.Item>
        <Descriptions.Item label="Rainbird decision">
          {rbDecision}
        </Descriptions.Item>

        <Descriptions.Item label="Postcode">
          {isEditing ? (
            <Input
              defaultValue={postcode}
              onChange={event => onChange(['postcode', event.target.value])}
            />
          ) : postcode && postcode.length ? (
            postcode
          ) : (
            'FILL IN'
          )}
        </Descriptions.Item>

        <Descriptions.Item label="Previous postcode">
          {isEditing ? (
            <Input
              defaultValue={previousPostcode}
              onChange={event =>
                onChange(['previousPostcode', event.target.value])
              }
            />
          ) : previousPostcode ? (
            previousPostcode
          ) : (
            'FILL IN'
          )}
        </Descriptions.Item>

        <Descriptions.Item label="Date card last issued">
          {isEditing ? (
            <DatePicker
              defaultValue={dateCardLastIssued}
              onChange={date => onChange(['dateCardLastIssued', date])}
            />
          ) : dateCardLastIssued ? (
            renderDate(dateCardLastIssued)
          ) : (
            'FILL IN'
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Date address last changed">
          {isEditing ? (
            <DatePicker
              defaultValue={addressLastChanged}
              onChange={date => onChange(['addressLastChanged', date])}
            />
          ) : addressLastChanged ? (
            renderDate(addressLastChanged)
          ) : (
            'FILL IN'
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Contact details last changed">
          {isEditing ? (
            <DatePicker
              defaultValue={contactDetailsLastChanged}
              onChange={date => onChange(['contactDetailsLastChanged', date])}
            />
          ) : contactDetailsLastChanged ? (
            renderDate(contactDetailsLastChanged)
          ) : (
            'FILL IN'
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Case flagged on">
          {isEditing ? (
            <DatePicker
              defaultValue={flagDate}
              onChange={date => onChange(['flagDate', date])}
            />
          ) : flagDate ? (
            renderDate(flagDate)
          ) : (
            'FILL IN'
          )}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

const EditSaveButton = ({ isEditing, onClick }) =>
  isEditing ? (
    <Button onClick={onClick} type="primary">
      Save <Icon type="save" />
    </Button>
  ) : (
    <Button onClick={onClick}>
      Edit <Icon type="edit" />
    </Button>
  )

export const Case = props => {
  const [caseData, setCaseData] = useState(props)
  const [pending, setPending] = useState(false)
  const [saving, setSaving] = useState(false)
  const [_, dispatch] = useAppState()

  useEffect(() => {
    if (pending) {
      ;(async () => {
        const { decision, interaction } = await analyseCase(caseData)
        setPending(false)

        dispatch({
          type: 'caseDecision',
          payload: {
            id: caseData.id,
            decision,
            apiResponse: interaction.queryResponse
          }
        })
      })()
    }
  }, [pending])

  useEffect(() => {
    if (saving) {
      dispatch({
        type: 'updateCase',
        payload: caseData
      })
      setSaving(false)
    }
  }, [saving])

  return (
    <>
      <style jsx>{`
        .loader {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(251, 251, 251, 0.75);
          top: 0;
          left: 0;
          z-index: 999;
        }

        .spinner {
          position: absolute;
          top: 40%;
          left: 49%;
        }

        .alert {
          display: inline-block;
          margin-bottom: 1em;
        }

        .wrapper {
          position: relative;
        }
      `}</style>
      <div className="wrapper">
        <div className="loader" style={{ display: pending ? 'block' : 'none' }}>
          <div className="spinner">
            <Spin />
          </div>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={`Case#${caseData.id} info`} key="1">
            <CaseDescription
              {...caseData}
              onChange={([key, value]) =>
                setCaseData({
                  ...caseData,
                  [key]: value
                })
              }
              onAnalyse={() => setPending(true)}
              onSave={() => setSaving(true)}
            />
          </TabPane>
          <TabPane tab="Transactions" key="2">
            <TransactionTable transactions={caseData.transactions} />
          </TabPane>
          <TabPane tab="Decisioning" key="3">
            {typeof caseData.markedAs !== 'undefined' ? (
              <div className="alert">
                <Alert
                  message={`The user marked this case as ${caseData.markedAs.toLowerCase()}.`}
                  type="info"
                  showIcon
                />
              </div>
            ) : null}
            <p>Rainbird's evidence tree:</p>
            <EvidenceTree
              decision={caseData.rbDecision}
              factId={caseData.factId}
            />
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}
