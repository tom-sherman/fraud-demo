import { CaseTable } from '../components/CaseTable'
import { Button } from 'antd/lib/radio'
import { Typography } from 'antd'
import Head from 'next/head'
import { useAppState } from '../components/AppContext'
import { filterGenuine } from '../util'
import { openDecisionNotification } from '../components/notifications'
import Router from 'next/router'

const GenuinePage = () => {
  const [{ cases }, dispatch] = useAppState()

  return (
    <>
      <Head>
        <title>Genuine | Rainbird Fraud Detection</title>
      </Head>
      <Typography.Title>Genuine Cases</Typography.Title>
      <CaseTable
        cases={cases.filter(filterGenuine)}
        actionRender={(_, record) => (
          <Button
            onClick={() => {
              dispatch({ type: 'markFraud', payload: record.id })
              openDecisionNotification({
                decision: 'Fraud',
                message: `Case#${record.id} marked as Fraud.`,
                onClick: () =>
                  Router.push({
                    pathname: '/fraud',
                    query: { id: record.id }
                  })
              })
            }}
          >
            Fraud
          </Button>
        )}
      />
    </>
  )
}

GenuinePage.geInitialProps = async () => {}

export default GenuinePage
