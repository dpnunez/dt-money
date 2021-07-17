import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchClient } from "Services/fetchClient";

interface ProviderProps {
	children: ReactNode
}

interface TransactionData {
	id: number;
	title: string;
	amount: number;
	category: string;
	createdAt: Date;
	type: string;
}

type NewTransactionData = Omit<TransactionData, 'id' | 'createdAt'>

interface ContextData {
	transactions: TransactionData[]
	createTransaction: (data: NewTransactionData) => Promise<void>
}

const TransactionContext = createContext<ContextData>({} as ContextData)

const TransactionProvider = ({ children }: ProviderProps) => {
	const [transactions, setTransactions] = useState<TransactionData[]>([])

	useEffect(() => {
		fetchClient.get('/transactions').then(response => setTransactions(response.data.transactions)).catch(e => console.log(e))
	}, [])


	const createTransaction = async (data: NewTransactionData) => {
		try {
			const response =  await fetchClient.post('/transactions', {
				...data,
				createdAt: new Date(),
			})
			setTransactions([...transactions, response.data.transaction])
		} catch (err) {
			throw new Error(err)
		}
	}

	return (
		<TransactionContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionContext.Provider>
	)
}

const useTransactions = () => {
	const context = useContext(TransactionContext)

	if (context === undefined) {
		console.error("Tentando acessar contexto fora do escopo")
	}

	return context
}


export { TransactionProvider, useTransactions }


// const TransactionsTable = () => {
// 	const [transactions, setTransactions] = useState<Transaction[]>([])

	