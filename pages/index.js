import { Col, Row, Progress, Typography, Statistic, Icon } from 'antd'
import Head from 'next/head'
import { useAppState } from '../components/AppContext'
import { CasePie } from '../components/CasePie'
import { filterFraud, filterGenuine, filterRefer, formatDate } from '../util'

const HomePage = ({ history }) => {
  const [{ cases, referralsToday }, dispatch] = useAppState()

  const currentReferralCount = cases.filter(filterRefer).length

  return (
    <>
      <Head>
        <title>Home | Rainbird Fraud Detection</title>
      </Head>

      <div>
        <Typography.Title style={{ marginBottom: '2em' }}>
          Dashboard ({formatDate(new Date())})
        </Typography.Title>
        <Row>
          <Col span={7} style={{ paddingRight: '1.5em' }}>
            <div className="ant-statistic-title">Referral Completion</div>
            <Progress
              // type="dashboard"
              percent={100 - (100 * currentReferralCount) / referralsToday}
            />
          </Col>
          <Col span={5}>
            <Statistic
              title="Fraud"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="arrow-up" />}
              suffix="%"
            />
          </Col>
          <Col span={5}>
            <Statistic
              title="Genuine"
              value={2.32}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type="arrow-down" />}
              suffix="%"
            />
          </Col>
          <Col span={5}>
            <Statistic
              title="Referrals"
              value={0.5}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type="arrow-up" />}
              suffix="%"
            />
          </Col>
        </Row>
        <Row>
          <Col span={16}>{/* <CaseHistoryGraph history={history} /> */}</Col>
          <Col span={8}>
            {/* <CasePie
              fraud={cases.filter(filterFraud).length}
              genuine={cases.filter(filterGenuine).length}
              validate={currentReferralCount}
            /> */}
          </Col>
        </Row>
      </div>
    </>
  )
}

HomePage.getInitialProps = async () => {
  const history = [
    {
      end: '2019-03-31',
      fraud: 51,
      genuine: 200
    },
    {
      end: '2019-02-28',
      fraud: 41,
      genuine: 350
    },
    {
      end: '2019-01-31',
      fraud: 52,
      genuine: 423
    }
  ]

  return { history }
}

export default HomePage
