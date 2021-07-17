import { useCallback, useEffect } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { useTransactions } from 'hooks/useTransaction'

import { FormContainer, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from 'Assets/close.svg'
import incomeImg from 'Assets/income.svg'
import outcomeImg from 'Assets/outcome.svg'

interface FormData {
	title: string;
	amount: number;
	category: string;
	type: string;
}

interface NewTransactionProps {
	isOpen: boolean;
	onRequestClose: () => void
}

const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionProps) => {
	const { register, setValue, watch, handleSubmit, reset } = useForm()
	const { createTransaction } = useTransactions()


	useEffect(() => {
		register('type', { required: true })
	}, [register])


	const onSubmit = useCallback(async (data: FormData) => {
		await createTransaction(data)
		reset()
		onRequestClose()
	}, [createTransaction, onRequestClose, reset])


	const type = watch('type')

	return (
		<Modal
			closeTimeoutMS={200}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="react-modal-content"
			overlayClassName="react-modal-overlay"
		>
			<button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechal modal" />
      </button>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<h2>Cadastrar transação</h2>

				<input {...register('title', { required: true })} placeholder="Título" />
				<input {...register('amount', { valueAsNumber: true, required: true })} type="number" placeholder="Valor" />

				<TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setValue('type', 'deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setValue('type', 'withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

				<input {...register('category', { required: true })} placeholder="Categoria" />
				<button type="submit">Criar transação</button>
			</FormContainer>
		</Modal>
	)
}


export { NewTransactionModal }