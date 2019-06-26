import { notification } from 'antd'
import { filterFraud, filterGenuine, filterRefer } from '../util'

export const openDecisionNotification = ({
  decision,
  message,
  description,
  onClick
}) => {
  let type
  if (filterRefer({ decision })) {
    type = 'info'
  } else if (filterGenuine({ decision })) {
    type = 'success'
  } else if (filterFraud({ decision })) {
    type = 'error'
  }
  notification[type]({
    message,
    description,
    onClick
  })
}
