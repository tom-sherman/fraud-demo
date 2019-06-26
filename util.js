import moment from 'moment'

export const filterGenuine = record => record.decision === 'Genuine'

const FRAUD_STATUS = [
  'Fraud',
  'Application Fraud',
  'Account Takeover',
  'Card Not Present Fraud'
]
export const filterFraud = record => FRAUD_STATUS.includes(record.decision)

const REFER_STATUS = ['Refer', 'Info needed', 'Error']
export const filterRefer = record => REFER_STATUS.includes(record.decision)

export const formatCurrency = amount => `£${parseInt(amount).toFixed(2)}`

export const renderDate = d => (d ? d.format('YYYY-MM-DD') : undefined)

export const randomId = () =>
  (Math.random() * 1e16).toString(36).substring(0, 10)

const API_DOMAIN = 'https://enterprise-api.rainbird.ai'
const KMID = '8eb8025d-72e8-4735-a60d-53f1a18dfc79'
const API_AUTH = 'Basic OTk0OWRmM2YtMjIzZS00YTUyLTg5ZTgtNjk0Mjc4MDQ4ZjhkOg=='
const QUERY_REL = 'receives result'

export const analyseCase = async caseData => {
  const startResponse = await fetch(`${API_DOMAIN}/start/${KMID}`, {
    headers: {
      Authorization: API_AUTH
    }
  }).then(res => res.json())

  console.log('Rainbird session started: ', startResponse)

  console.log('Creating facts from', caseData)

  const facts = createFacts(caseData)

  console.log('Injecting facts: ', facts)

  const injectResponse = await fetch(
    `${API_DOMAIN}/${startResponse.id}/inject`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(facts)
    }
  ).then(res => res.json())

  console.log('Injected facts', injectResponse)

  const queryResponse = await fetch(`${API_DOMAIN}/${startResponse.id}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      subject: caseData.accountId,
      relationship: QUERY_REL,
      object: null
    })
  }).then(res => res.json())

  console.log('Query result: ', queryResponse)

  const decision = makeDecision(queryResponse)

  return {
    decision,
    interaction: { startResponse, injectResponse, queryResponse }
  }
}

const makeDecision = res => {
  if (res && res.result && res.result.length > 0) {
    return res.result[0].object
  }

  if (res && res.question) {
    return 'Info needed'
  }

  return 'Error'
}

const CASE_REL_MAP = {
  flagDate: 'flagged on',
  dateCardLastIssued: 'new card issued on date',
  addressLastChanged: 'account most recent updated address date',
  postcode: 'postcode attached to account',
  previousPostcode: 'change of address postcode attached to account',
  contactDetailsLastChanged: 'account most recent updated phone number date'
}
const TRANSACTION_REL_MAP = {
  amount: 'has amount',
  location: 'transaction made at location',
  date: 'occured on date',
  merchantCode: 'belongs to MCC category',
  source: 'transaction made at source'
}

const createFacts = ({ transactions, ...caseData }) => {
  const transactionFacts = []

  for (const {
    id,
    amount,
    location,
    date,
    merchantCode,
    source
  } of transactions) {
    transactionFacts.push({
      subject: caseData.accountId,
      relationship: 'has associated transactions',
      object: id
    })

    transactionFacts.push(
      ...Object.entries({ amount, location, date, merchantCode, source }).map(
        ([key, value]) => ({
          subject: id,
          relationship: TRANSACTION_REL_MAP[key],
          object: moment.isMoment(value) ? value.format('YYYY-MM-DD') : value
        })
      )
    )
  }

  const {
    flagDate,
    dateCardLastIssued,
    addressLastChanged,
    postcode,
    previousPostcode,
    contactDetailsLastChanged
  } = caseData

  return Object.entries({
    flagDate,
    dateCardLastIssued,
    addressLastChanged,
    postcode,
    previousPostcode,
    contactDetailsLastChanged
  })
    .map(([key, value]) => ({
      subject: caseData.accountId,
      relationship: CASE_REL_MAP[key],
      object: moment.isMoment(value) ? value.format('YYYY-MM-DD') : value
    }))
    .concat(...transactionFacts)
}
