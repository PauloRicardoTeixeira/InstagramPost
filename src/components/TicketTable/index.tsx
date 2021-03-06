import { useQuery } from '@apollo/client'
import { Table, Tag } from 'antd'
import ModalCreateTicket from 'components/Modal'

//import * as S from './styles'

import { QUERY_ALL_TICKETS } from 'components/graphql/queries/tickets'
import { useState } from 'react'

const columns = [
  {
    title: 'Code',
    dataIndex: 'key',
    key: 'key',
    displayName: 'code',
    render: function display(text: string) {
      return <a style={{ color: 'black', pointerEvents: 'none' }}>{text}</a>
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
    render: function display(tags: string) {
      let color = tags === 'Low Priorit' ? 'geekblue' : 'green'
      if (tags === '') {
        color = 'volcano'
      }
      return (
        <span>
          <Tag color={color} key={tags}>
            {tags.toUpperCase()}
          </Tag>
        </span>
      )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'key',
    render: function display(text: string) {
      return (
        <a style={{ color: 'black', pointerEvents: 'none' }}>
          {text.toUpperCase()}
        </a>
      )
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: function Dislplay(data: dataFilteredProps) {
      const [modalOpen, setModalOpen] = useState(false)
      console.log('sssssddd', data)
      const setmodal = () => {
        setModalOpen(!modalOpen)
      }
      return (
        <span>
          <a
            onClick={() => {
              setModalOpen(!modalOpen)
            }}
          >
            Answer
          </a>
          <ModalCreateTicket
            data={data}
            setmodal={setmodal}
            statemodal={modalOpen}
          />
        </span>
      )
    }
  }
]

export type TicketProps = {
  id: number
  content: string
  tagId: number
  subject: string
  clientId: number
  responsibleId: number
  createdAt: string
  updateAt: string
  status: string
  client: {
    id: string
    name: string
  }
  tags: {
    name: string
    id: string
  }
  responsible: {
    id: string
    name: string
  }
}

export type dataFilteredProps = {
  key: number
  Subject: string
  Customer: string
  tags: string
  status: string
  content: string
}
const TicketTable = () => {
  const { data, loading } = useQuery(QUERY_ALL_TICKETS)

  if (loading) {
    return <h1>Loading</h1>
  }

  const dataFiltered = data.getTickets.map((ticket: TicketProps) => {
    const datafiltr: dataFilteredProps = {
      key: ticket.id,
      Subject: ticket.subject,
      Customer: ticket.client.name,
      tags: ticket.tags.name,
      status: ticket.status,
      content: ticket.content
    }
    return datafiltr
  })

  console.log(dataFiltered)

  return <Table columns={columns} dataSource={dataFiltered} />
}
export default TicketTable
