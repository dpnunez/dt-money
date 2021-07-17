import { useState } from 'react';
import { Header, Dashboard, NewTransactionModal } from 'Components'
import Modal from 'react-modal'

import { GlobalStyles } from "./styles/global";
import { TransactionProvider } from 'hooks/useTransaction';

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
    <TransactionProvider>
			<Header onOpenTrasactionForm={handleOpenTransactionModal} />
			<Dashboard />
			<GlobalStyles />
			<NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseTransactionModal} />
		</TransactionProvider>
  );
}

export { App }