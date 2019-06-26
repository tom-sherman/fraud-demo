import { CaseTable } from '../components/CaseTable'
import { Radio, Typography } from 'antd'
import Head from 'next/head'
import { useAppState } from '../components/AppContext'
import { filterRefer } from '../util'
import { openDecisionNotification } from '../components/notifications'

const ValidatePage = () => {
  const [{ cases }, dispatch] = useAppState()
  return (
    <>
      <Head>
        <title>Validate | Rainbird Fraud Detection</title>
      </Head>
      <Typography.Title>Validate Cases</Typography.Title>
      <CaseTable
        cases={cases.filter(filterRefer)}
        actionRender={(_, record) => (
          <Radio.Group>
            <Radio.Button
              onClick={() => {
                dispatch({ type: 'markGenuine', payload: record.id })
                openDecisionNotification({
                  decision: 'Genuine',
                  message: `Case#${record.id} marked as Genuine.`
                })
              }}
            >
              Genuine
            </Radio.Button>
            <Radio.Button
              onClick={() => {
                dispatch({ type: 'markFraud', payload: record.id })
                openDecisionNotification({
                  decision: 'Fraud',
                  message: `Case#${record.id} marked as Fraud.`
                })
              }}
            >
              Fraud
            </Radio.Button>
          </Radio.Group>
        )}
      />
    </>
  )
}

export default ValidatePage
