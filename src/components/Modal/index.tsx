import { Modal } from 'antd'
import FormTicket from 'components/FormTicket'

import { dataFilteredProps } from 'components/TicketTable'

export type modalProps = {
  data: dataFilteredProps
  statemodal: boolean
  setmodal: () => void
}

const ModalCreateTicket = ({ setmodal, statemodal, data }: modalProps) => {
  console.log('modals', data)
  return (
    <Modal
      style={{
        width: '600px'
      }}
      title="Answer Ticket"
      centered
      visible={statemodal}
      onOk={() => setmodal()}
      onCancel={() => setmodal()}
    >
      <FormTicket datas={data} />
    </Modal>
  )
}

export default ModalCreateTicket
