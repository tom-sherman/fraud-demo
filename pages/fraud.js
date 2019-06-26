import { CaseTable } from '../components/CaseTable'
import { Button } from 'antd/lib/radio'
import Head from 'next/head'
import { Typography } from 'antd'
import { useAppState } from '../components/AppContext'
import { filterFraud } from '../util'
import { openDecisionNotification } from '../components/notifications'

const FraudPage = () => {
  const [{ cases }, dispatch] = useAppState()

  return (
    <>
      <Head>
        <title>Fraud | Rainbird Fraud Detection</title>
      </Head>
      <Typography.Title>Fraud Cases</Typography.Title>
      <CaseTable
        cases={cases.filter(filterFraud)}
        actionRender={(_, record) => (
          <Button
            onClick={() => {
              dispatch({ type: 'markGenuine', payload: record.id })
              openDecisionNotification({
                decision: 'Genuine',
                message: `Case#${record.id} marked as Genuine.`
              })
            }}
          >
            Genuine
          </Button>
        )}
      />
    </>
  )
}

FraudPage.geInitialProps = async () => {}

export default FraudPage
