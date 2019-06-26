import React from 'react'
import App, { Container } from 'next/app'
import { AppProvider } from '../components/AppContext'
import { App as AppComponent } from '../components/App'
import data from '../data'
import { filterRefer, filterGenuine, filterFraud } from '../util'
import { openDecisionNotification } from '../components/notifications'

import 'antd/dist/antd.css'
import 'react-vis/dist/style.css'
import '../styles.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  INITIAL_APP_STATE = {
    cases: data.map(d => ({ rbDecision: d.decision, ...d })),
    referralsToday: data.filter(filterRefer).length,
    completedReferrals: 0
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <AppProvider initialState={this.INITIAL_APP_STATE} reducer={reducer}>
          <AppComponent>
            <Component {...pageProps} />
          </AppComponent>
        </AppProvider>
      </Container>
    )
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return state
    case 'logout':
      return state
    case 'markFraud':
      return markCase(state, action, 'Fraud')
    case 'markGenuine':
      return markCase(state, action, 'Genuine')
    case 'addCase':
      return {
        ...state,
        cases: state.cases.concat({
          id: nextCaseId(state.cases),
          ...action.payload
        })
      }
    case 'caseDecision':
      const isRefer = filterRefer({ decision: action.payload.decision })
      openDecisionNotification({
        decision: action.payload.decision,
        message: `Case#${action.payload.id} marked as ${
          action.payload.decision
        }`
      })
      return {
        ...state,
        referralsToday: isRefer
          ? state.referralsToday + 1
          : state.referralsToday,
        completedReferrals: isRefer
          ? state.completedReferrals
          : state.completedReferrals + 1,
        cases: state.cases.map(c => {
          if (c.id !== action.payload.id) {
            return c
          }
          return {
            ...c,
            ...(action.payload.decision !== 'Info needed' &&
              action.payload.decision !== 'Error' && {
                rbDecision: action.payload.decision,
                factId: action.payload.apiResponse.result[0].factID
              }),
            decision: action.payload.decision
          }
        })
      }
    case 'updateCase':
      return {
        ...state,
        cases: state.cases.map(c =>
          c.id === action.payload.id ? action.payload : c
        )
      }
    default:
      throw new Error(`"${action.type}" is not a valid action.`)
  }
}

function markCase(state, action, decision) {
  return {
    ...state,
    completedReferrals: state.completedReferrals + 1,
    cases: state.cases.map(c => {
      if (c.id !== action.payload) {
        return c
      }

      c.decision = decision
      c.markedAs = decision
      return c
    })
  }
}

const nextCaseId = cases =>
  cases.reduce((prev, curr) => (prev.id > curr.id ? prev.id : curr.id), 0)

export default MyApp
