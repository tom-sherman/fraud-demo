import { CaseTable } from '../components/CaseTable'
import { Button } from 'antd/lib/radio'
import { Typography } from 'antd'
import Head from 'next/head'
import { useAppState } from '../components/AppContext'
import { filterGenuine } from '../util'

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
            onClick={() => dispatch({ type: 'markFraud', payload: record.id })}
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
