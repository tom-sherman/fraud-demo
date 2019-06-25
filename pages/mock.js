import Head from 'next/head'
import {
  Typography,
  Button,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Card
} from 'antd'
import { useAppState } from '../components/AppContext'
import { useState } from 'react'
import { randomId } from '../util'

const MockPage = () => (
  <>
    <Head>
      <title>Mock | Rainbird Fraud Detection</title>
    </Head>
    <div>
      <Typography.Title>Mock Case</Typography.Title>
      <WrappedMockForm />
    </div>
  </>
)

const MockForm = ({ form }) => {
  const [_, dispatch] = useAppState()
  const [transactions, setTransactions] = useState(0)
  const { getFieldDecorator } = form

  const handleSubmit = event => {
    event.preventDefault()
    form.validateFieldsAndScroll((err, data) => {
      if (!err) {
        console.log('Received values of form: ', data)

        dispatch({
          type: 'addCase',
          payload: {
            decision: 'Fraud',
            flagDate: new Date().toString(),
            transactions: data.transactions
              ? data.transactions.map(t => ({
                  ...t,
                  id: randomId()
                }))
              : [],
            ...data
          }
        })
        form.resetFields()
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: '40em' }}>
      <Form.Item label="Account number">
        {getFieldDecorator('accountId', {
          rules: [
            {
              required: true,
              message: 'Please input an account number.'
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Postcode">
        {getFieldDecorator('postcode')(<Input />)}
      </Form.Item>
      <Form.Item label="Previous postcode">
        {getFieldDecorator('previousPostcode')(<Input />)}
      </Form.Item>
      <Form.Item label="Contact details last changed">
        {getFieldDecorator('contactDetailsLastChanged', {
          rules: [
            {
              required: true,
              message: 'Please input a date.'
            }
          ]
        })(<DatePicker />)}
      </Form.Item>
      <Form.Item label="Card last issued date">
        {getFieldDecorator('dateCardLastIssued', {
          rules: [
            {
              required: true,
              message: 'Please input a date.'
            }
          ]
        })(<DatePicker />)}
      </Form.Item>
      <Form.Item label="Address last changed date">
        {getFieldDecorator('addressLastChanged', {
          rules: [
            {
              required: true,
              message: 'Please input a date.'
            }
          ]
        })(<DatePicker />)}
      </Form.Item>

      <style jsx>{`
        .transaction {
          border-bottom: 1px solid black;
        }
      `}</style>

      {new Array(transactions).fill().map((_, index) => (
        <Card title={`Transaction #${index + 1}`}>
          <Form.Item label={`Transaction #${index + 1}`} key={index}>
            <Form.Item label="Location">
              {getFieldDecorator(`transactions[${index}].location`, {
                rules: [
                  {
                    required: true,
                    message: 'Please input a location.'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Amount">
              {getFieldDecorator(`transactions[${index}].amount`, {
                initialValue: 0,
                rules: [
                  {
                    required: true,
                    message: 'Please input an amount.'
                  }
                ]
              })(
                <InputNumber
                  formatter={value =>
                    `£ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                />
              )}
            </Form.Item>
            <Form.Item label="Date">
              {getFieldDecorator(`transactions[${index}].date`, {
                rules: [
                  {
                    required: true,
                    message: 'Please input a date.'
                  }
                ]
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item label="Merchant code">
              {getFieldDecorator(`transactions[${index}].merchantCode`, {
                rules: [
                  {
                    required: true,
                    message: 'Please input a merchant code.'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Source">
              {getFieldDecorator(`transactions[${index}].source`, {
                rules: [
                  {
                    required: true,
                    message: 'Please input a source.'
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Form.Item>
        </Card>
      ))}

      <Form.Item>
        <Button
          htmlType="button"
          onClick={() => setTransactions(transactions + 1)}
        >
          Add transaction
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedMockForm = Form.create({ name: 'mock' })(MockForm)

export default MockPage
