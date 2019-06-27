import moment from 'moment'

const data = [
  {
    id: 1,
    accountId: '2243',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('2013-01-09T00:00:00.000Z'),
    postcode: 'NG3 7HA',
    previousPostcode: 'HR4 0RW',
    dateCardLastIssued: moment('2016-07-07T23:00:00.000Z'),
    addressLastChanged: moment('2013-09-08T23:00:00.000Z'),
    transactions: [
      {
        id: 'ji2t0gu86l',
        accountId: '2243',
        location: 'Nottingham',
        amount: 2.5,
        date: moment('2019-01-04T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: '0lm8x5wu9j',
        accountId: '2243',
        location: 'Nottingham',
        amount: 3.3,
        date: moment('2019-01-04T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: 'nnlrgvegre',
        accountId: '2243',
        location: 'Nottingham',
        amount: 10.2,
        date: moment('2019-01-07T00:00:00.000Z'),
        merchantCode: '5251',
        source: 'Card present no PIN used'
      },
      {
        id: 'pj3jgud04s',
        accountId: '2243',
        location: 'Nottingham',
        amount: 20,
        date: moment('2019-02-03T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present no PIN used'
      },
      {
        id: '467w3q8gcc',
        accountId: '2243',
        location: 'Peterborough',
        amount: 19.99,
        date: moment('2019-02-04T00:00:00.000Z'),
        merchantCode: '5945',
        source: 'Online no PIN used'
      },
      {
        id: '5tr0tusm6s',
        accountId: '2243',
        location: 'Nottingham',
        amount: 50,
        date: moment('2019-02-05T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present and PIN used'
      },
      {
        id: 'h9uumdamyo',
        accountId: '2243',
        location: 'Nottingham',
        amount: 50,
        date: moment('2019-03-10T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present and PIN used'
      },
      {
        id: 'zc0nui7zmo',
        accountId: '2243',
        location: 'Portsmouth',
        amount: 10.99,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5945',
        source: 'Online no PIN used'
      },
      {
        id: 'cudkmiraug',
        accountId: '2243',
        location: 'Portsmouth',
        amount: 10,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5945',
        source: 'Online no PIN used'
      },
      {
        id: 'aegvnsq6wx',
        accountId: '2243',
        location: 'Nottingham',
        amount: 50.01,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present no PIN used'
      },
      {
        id: '7mgghsar7l',
        accountId: '2243',
        location: 'London',
        amount: 49.99,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '6381',
        source: 'Online no PIN used'
      },
      {
        id: '87yc8nblkc',
        accountId: '2243',
        location: 'Nottingham',
        amount: 20.05,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present no PIN used'
      },
      {
        id: 'jlnqlarscv',
        accountId: '2243',
        location: 'Nottingham',
        amount: 46.75,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: 'yenzzezvij',
        accountId: '2243',
        location: 'Nottingham',
        amount: 32.34,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: 'or7r0dou6k',
        accountId: '2243',
        location: 'Nottingham',
        amount: 2.99,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5251',
        source: 'Card present no PIN used'
      },
      {
        id: '06d4nza9qs',
        accountId: '2243',
        location: 'Nottingham',
        amount: 3.99,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5995',
        source: 'Card present no PIN used'
      },
      {
        id: 'j6qqokmjki',
        accountId: '2243',
        location: 'Nottingham',
        amount: 40.05,
        date: moment('2019-03-11T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present and PIN used'
      },
      {
        id: '0vya2m0y07',
        accountId: '2243',
        location: 'London',
        amount: 2265.43,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5521',
        source: 'Online no PIN used'
      },
      {
        id: 'tsg9w3o1fe',
        accountId: '2243',
        location: 'London',
        amount: 1122.34,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5521',
        source: 'Online no PIN used'
      }
    ],
    decision: 'Genuine',
    rbDecision: 'Genuine',
    factId:
      'WA:RF:913cd15d5a51cfa4777754c4b3b39cc436165df4aa50cab2c69533b64135bc67'
  },
  {
    id: 2,
    accountId: '4445',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('2019-02-24T00:00:00.000Z'),
    postcode: 'HA3 7PS',
    previousPostcode: 'E10 5QF',
    dateCardLastIssued: moment('2019-03-10T00:00:00.000Z'),
    addressLastChanged: moment('2019-02-24T00:00:00.000Z'),
    transactions: [
      {
        id: '097bk68ltv',
        accountId: '4445',
        location: 'London',
        amount: 1.99,
        date: moment('2019-01-05T00:00:00.000Z'),
        merchantCode: '5995',
        source: 'Card present no PIN used'
      },
      {
        id: 'p129692ybw',
        accountId: '4445',
        location: 'London',
        amount: 11.24,
        date: moment('2019-01-06T00:00:00.000Z'),
        merchantCode: '5251',
        source: 'Card present no PIN used'
      },
      {
        id: '82q54eh197',
        accountId: '4445',
        location: 'London',
        amount: 4.33,
        date: moment('2019-01-07T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: 'xpm7qxtxxw',
        accountId: '4445',
        location: 'London',
        amount: 1124.05,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5045',
        source: 'Card present and PIN used'
      },
      {
        id: '2sy86iu9i4',
        accountId: '4445',
        location: 'London',
        amount: 4673.99,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5045',
        source: 'Card present and PIN used'
      },
      {
        id: 'zwfwd7w9mf',
        accountId: '4445',
        location: 'London',
        amount: 3999.99,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5045',
        source: 'Card present and PIN used'
      }
    ],
    decision: 'Card Not Present Fraud',
    rbDecision: 'Card Not Present Fraud',
    factId:
      'WA:RF:2a042785ccbe21a2d2da708e92178a41ce6e3b03c447e36f47eb4682683fbbfa'
  },
  {
    id: 3,
    accountId: '1182',
    flagDate: moment('2019-03-13T00:00:00.000Z'),
    contactDetailsLastChanged: moment('2019-03-12T00:00:00.000Z'),
    postcode: 'NR1 1JG',
    previousPostcode: 'HX2 6PW',
    dateCardLastIssued: moment('2019-03-12T00:00:00.000Z'),
    addressLastChanged: moment('2019-03-12T00:00:00.000Z'),
    transactions: [
      {
        id: 'wtk1yk1lyi',
        accountId: '1182',
        location: 'Halifax',
        amount: 2146.76,
        date: moment('2016-06-04T23:00:00.000Z'),
        merchantCode: '3005',
        source: 'Online no PIN used'
      },
      {
        id: 'pnvr3odiqj',
        accountId: '1182',
        location: 'Halifax',
        amount: 765.96,
        date: moment('2017-05-27T23:00:00.000Z'),
        merchantCode: '3504',
        source: 'Card present and PIN used'
      },
      {
        id: 'dck0it3cf5',
        accountId: '1182',
        location: 'Halifax',
        amount: 1335.67,
        date: moment('2018-06-04T23:00:00.000Z'),
        merchantCode: '4722',
        source: 'Online no PIN used'
      },
      {
        id: 'k2ckcv12x2',
        accountId: '1182',
        location: 'Halifax',
        amount: 405.99,
        date: moment('2018-12-19T00:00:00.000Z'),
        merchantCode: '7993',
        source: 'Card present and PIN used'
      },
      {
        id: 'q46bka6sn6',
        accountId: '1182',
        location: 'London',
        amount: 50,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '4829',
        source: 'Card present and PIN used'
      },
      {
        id: '1wzbrv3oa0',
        accountId: '1182',
        location: 'London',
        amount: 50,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '4829',
        source: 'Card present and PIN used'
      },
      {
        id: 'j3jdzgn36z',
        accountId: '1182',
        location: 'London',
        amount: 50,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '4829',
        source: 'Card present and PIN used'
      },
      {
        id: '0eruvoohbv',
        accountId: '1182',
        location: 'London',
        amount: 50,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '4829',
        source: 'Card present and PIN used'
      }
    ],
    decision: 'Application Fraud',
    rbDecision: 'Application Fraud',
    factId:
      'WA:RF:e7f6daa88de902d1effa0fbe0a1441fd13b1101f09650d02fbb3f688a4601b33'
  },
  {
    id: 4,
    accountId: '1414',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('1988-12-11T00:00:00.000Z'),
    postcode: 'BB11 5RJ',
    previousPostcode: 'BB11 5RJ',
    dateCardLastIssued: moment('2019-02-28T23:00:00.000Z'),
    addressLastChanged: moment('2019-03-09T00:00:00.000Z'),
    transactions: [
      {
        id: 'd23gfdfd6d',
        accountId: '1414',
        location: 'Nottingham',
        amount: 999,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: 'hdgd76sjfgd',
        accountId: '1414',
        location: 'Nottingham',
        amount: 24999,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5411',
        source: 'Card present no PIN used'
      },
      {
        id: '8gh98kllsgd3',
        accountId: '1414',
        location: 'Nottingham',
        amount: 279,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5734',
        source: 'Card present no PIN used'
      },
      {
        id: 'nlc4x3wd9j',
        accountId: '1414',
        location: 'Nottingham',
        amount: 14,
        date: moment('2019-03-06T00:00:00.000Z'),
        merchantCode: '3456',
        source: 'Card present no PIN used'
      },
      {
        id: 'l38xh3kaby',
        accountId: '1414',
        location: 'Nottingham',
        amount: 16,
        date: moment('2019-03-05T00:00:00.000Z'),
        merchantCode: '5251',
        source: 'Card present no PIN used'
      }
    ],
    decision: 'Account Takeover',
    rbDecision: 'Account Takeover',
    factId:
      'WA:RF:a58d9ec8430bfd8e58bd971b34585aae87ac8dfb46d9a67830ca89bbac83c804'
  },
  {
    id: 5,
    accountId: '8607',
    flagDate: moment('2019-03-13T00:00:00.000Z'),
    contactDetailsLastChanged: moment('1980-11-01T00:00:00.000Z'),
    postcode: 'S80 9TD',
    previousPostcode: 'S80 2AH',
    dateCardLastIssued: moment('2016-06-28T23:00:00.000Z'),
    addressLastChanged: moment('2003-02-23T23:00:00.000Z'),
    transactions: [
      {
        id: 'fd8dhsks39',
        accountId: '8607',
        location: 'Shrewsbury',
        amount: 12.99,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '2334',
        source: 'Card present no PIN used'
      }
    ],
    decision: 'Genuine',
    rbDecision: 'Genuine',
    factId:
      'WA:RF:58ddf4672dfc5d09007fdeb133834b0e6165701d61282864a2e4a9351ea8485f'
  },
  {
    id: 6,
    accountId: '1673',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('1999-03-18T00:00:00.000Z'),
    postcode: 'NG34 7XW',
    previousPostcode: 'EH141DX',
    dateCardLastIssued: moment('2019-02-27T00:00:00.000Z'),
    addressLastChanged: moment('1993-07-30T23:00:00.000Z'),
    transactions: [
      {
        id: '87shdj1zd',
        accountId: '1673',
        location: 'South Mimms',
        amount: 1.99,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5812',
        source: 'Card present no PIN used'
      },
      {
        id: 'jd8sjja193',
        accountId: '1673',
        location: 'South Mimms',
        amount: 6.49,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5814',
        source: 'Card present no PIN used'
      },
      {
        id: 'lxzndfyv83h',
        accountId: '1673',
        location: 'South Mimms',
        amount: 20.01,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '5172',
        source: 'Card present no PIN used'
      }
    ],
    decision: 'Refer',
    rbDecision: 'Refer',
    factId:
      'WA:RF:5beec54c8348c6425730e2d337994323421a8c9b0bf99ae76fe436e9b686dc57'
  },
  {
    id: 7,
    accountId: '5820',
    flagDate: moment('2019-03-13T00:00:00.000Z'),
    contactDetailsLastChanged: moment('2011-03-30T23:00:00.000Z'),
    postcode: 'SG4 8NU',
    previousPostcode: 'BS16 3JY',
    dateCardLastIssued: moment('2015-10-04T23:00:00.000Z'),
    addressLastChanged: moment('1957-04-30T23:00:00.000Z'),
    transactions: [],
    decision: 'Genuine',
    rbDecision: 'Genuine',
    factId:
      'WA:RF:13fdf14bab568aa00b2d42f7ca5d53ee76b1c5c97d9c73976e00ab83a3f4a873'
  },
  {
    id: 8,
    accountId: '4382',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('1987-12-15T00:00:00.000Z'),
    postcode: 'DE55 7DH',
    previousPostcode: 'EH4 6SE',
    dateCardLastIssued: moment('2015-05-16T23:00:00.000Z'),
    addressLastChanged: moment('1987-12-15T00:00:00.000Z'),
    transactions: [],
    decision: 'Genuine',
    rbDecision: 'Genuine',
    factId:
      'WA:RF:3cda3e88b8d93c3725f6bd485a6099c3e0e4ed78966bf57c9e3dc3fc712c7cf6'
  },
  {
    id: 9,
    accountId: '8822',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('1988-12-01T00:00:00.000Z'),
    postcode: null,
    previousPostcode: 'CH44 2BA',
    dateCardLastIssued: null,
    addressLastChanged: moment('2019-03-06T00:00:00.000Z'),
    transactions: [
      {
        id: 'jsmmn38qns',
        accountId: '5411',
        location: 'Sheffield',
        amount: 50.68,
        date: moment('2019-03-10T00:00:00.000Z'),
        merchantCode: '2334',
        source: 'Card present and PIN used'
      },
      {
        id: 'ds778sh3zp',
        accountId: '5411',
        location: 'Sheffield',
        amount: 12.55,
        date: moment('2019-03-12T00:00:00.000Z'),
        merchantCode: '2334',
        source: 'Card present no PIN used'
      }
    ],
    decision: 'Info needed'
  },
  {
    id: 10,
    accountId: '4334',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('2001-10-03T00:00:00.000Z'),
    postcode: 'OL11 5BX',
    previousPostcode: 'OL11 5BX',
    dateCardLastIssued: moment('2001-10-03T00:00:00.000Z'),
    addressLastChanged: moment('2001-10-03T00:00:00.000Z'),
    transactions: [],
    decision: 'Genuine',
    rbDecision: 'Genuine',
    factId:
      'WA:RF:01133c55e889cf2f1c5ed82f74aa797c004fe67414d9942999c657e602bd32fb'
  },
  {
    id: 11,
    accountId: '5361',
    flagDate: moment('2019-03-12T00:00:00.000Z'),
    contactDetailsLastChanged: moment('1988-12-01T00:00:00.000Z'),
    postcode: 'CH44 2BA',
    previousPostcode: 'WF4 4LD',
    dateCardLastIssued: moment('2016-01-16T00:00:00.000Z'),
    addressLastChanged: moment('2019-03-11T00:00:00.000Z'),
    transactions: [],
    decision: 'Refer',
    rbDecision: 'Refer',
    factId:
      'WA:RF:2d0fe02ee31c95b6cdcc4f8e94b6f93d8379278ed77393e3199b77563c6439d8'
  }
]

export default data
