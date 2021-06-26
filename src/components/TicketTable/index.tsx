import { Table, Tag } from 'antd'

//import * as S from './styles'

const columns = [
  {
    title: 'Code',
    dataIndex: 'key',
    key: 'key',
    displayName: 'code',
    render: function display(text: string) {
      return <a>{text}</a>
    }
  },
  {
    title: 'Subject',
    dataIndex: 'Subject',
    key: 'Subject'
  },
  {
    title: 'Customer',
    dataIndex: 'Customer',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: function display(tags: [string]) {
      return (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </span>
      )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'key',
    render: function display(text: string) {
      return <a>{text}</a>
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: function dislplay() {
      return (
        <span>
          <a>Answer</a>
        </span>
      )
    }
  }
]

const data = [
  {
    key: '1',
    Subject: 'Need Help',
    Customer: 'Paulo Ricardo',
    tags: ['nice', 'developer'],
    status: 'A'
  },
  {
    key: '2',
    Subject: 'Need Help',
    Customer: 'Paulo Ricardo',
    tags: ['nice', 'developer'],
    status: 'A'
  },
  {
    key: '3',
    Subject: 'Need Help',
    Customer: 'Paulo Ricardo',
    tags: ['nice', 'developer'],
    status: 'A'
  }
]
const TicketTable = () => <Table columns={columns} dataSource={data} />

export default TicketTable
