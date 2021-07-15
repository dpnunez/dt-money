import { useState } from 'react';
import { Header, Dashboard, NewTransactionModal } from 'Components'
import Modal from 'react-modal'

import { GlobalStyles } from "./styles/global";

Modal.setAppElement("#root")

function App() {
	const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false)

	const handleOpenTransactionModal = () => {
		setIsOpenNewTransactionModal(true)
	}

	const handleCloseTransactionModal = () => {
		setIsOpenNewTransactionModal(false)
	}

  return (
    <>
			<Header onOpenTrasactionForm={handleOpenTransactionModal} />
			<Dashboard />
			<GlobalStyles />
			<NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseTransactionModal} />
		</>
  );
}

export { App }