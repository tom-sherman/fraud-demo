export const filterGenuine = record => record.decision === 'Genuine'

export const filterFraud = record => record.decision === 'Fraud'

export const filterRefer = record => record.decision === 'Refer'

export const formatCurrency = amount => `£${parseInt(amount).toFixed(2)}`

export const formatDate = d => new Intl.DateTimeFormat('EN-gb').format(d)

export const randomId = () =>
  (Math.random() * 1e16).toString(36).substring(0, 10)
