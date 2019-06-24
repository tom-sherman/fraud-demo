import { CaseTable } from '../components/CaseTable'
import { Radio, Typography } from 'antd'
import Head from 'next/head'
import { useAppState } from '../components/AppContext'
import { filterRefer } from '../util'

const ValidatePage = () => {
  const [{ cases }, dispatch] = useAppState()
  return (
    <>
      <Head>
        <title>Validate | Rainbird Fraud Demo</title>
      </Head>
      <Typography.Title>Validate Cases</Typography.Title>
      <CaseTable
        cases={cases.filter(filterRefer)}
        actionRender={(_, record) => (
          <Radio.Group>
            <Radio.Button
              onClick={() =>
                dispatch({ type: 'markGenuine', payload: record.id })
              }
            >
              Genuine
            </Radio.Button>
            <Radio.Button
              onClick={() =>
                dispatch({ type: 'markFraud', payload: record.id })
              }
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
